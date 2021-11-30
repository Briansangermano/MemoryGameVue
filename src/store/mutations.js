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

  // CHECK CARD
  [types.CHECK_CARD_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.CHECK_CARD_SUCCESS](state, { cardSelected }) {
    state.fetchingData = false;
    state.error = null;
    // Cambia el estado de la card a Checked
    cardSelected.checked = !cardSelected.checked;
    // Filtra las card checkeadas y las pushea a un nuevo array
    state.cards.filter(c => c === cardSelected && state.selected.push(c))
    // Valida que el array tenga una longitud par
    if (state.selected.length % 2 === 0) {
      const Object1 = state.selected[state.selected.length - 2];
      const Object2 = state.selected[state.selected.length - 1];
      // Compara el penultimo objeto del array con el ultimo
      if (Object1.number === Object2.number) {
        // Si son iguales filtra y elimina esos objeron de el array cards
        const newCards = state.cards.filter(card => (card !== Object1) && (card !== Object2) && card)
        setTimeout(() => {
          return state.cards = newCards
        }, 1000);
      } else {
        setTimeout(() => {
          return state.cards.forEach(element => element.checked = false);
        }, 1000);
      }
    }
  },

  [types.CHECK_CARD_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // PUSH MORE CARDS
  [types.PUSH_CARDS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.PUSH_CARDS_SUCCESS](state, data) {
    state.fetchingData = false;
    state.error = null;
    state.cards = [...data];
  },

  [types.PUSH_CARDS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
};
