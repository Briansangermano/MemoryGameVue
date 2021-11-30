<template>
  <div class="container">
    <div class="title">GAME</div>
    <div>Select a board:</div>
    <div class="container-block">
      <div @click="pushMoreCards(4)">4x4</div>
      <div @click="pushMoreCards(6)">6x6</div>
    </div>
    <div class="container-cards">
      <div v-for="card in cards" :key="card.id" @click="checkCard(card)">
        <button v-if="!card.checked" class="card noChecked">{{card.number}}</button>
        <button disabled v-else class="card checked">{{card.number}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cards: [],
      selected: []
    };
  },

  methods: {
    checkCard(cardSelected) { 
      // Cambia el estado de la card a Checked
      cardSelected.checked = !cardSelected.checked;
      // Filtra las card checkeadas y las pushea a un nuevo array
      this.cards.filter(c => c === cardSelected && this.selected.push(c))
      // Valida que el array tenga una longitud par
      if (this.selected.length % 2 === 0) {
        const Object1 = this.selected[this.selected.length - 2];
        const Object2 = this.selected[this.selected.length - 1];
        // Compara el penultimo objeto del array con el ultimo
        if (Object1.number === Object2.number) {
          // Si son iguales filtra y elimina esos objeron de el array cards
          const newCards = this.cards.filter(card => (card !== Object1) && (card !== Object2) && card)
          setTimeout(() => {
            return this.cards = newCards
          }, 1000);
        } else {
          setTimeout(() => {
            return this.cards.forEach(element => element.checked = false);
          }, 1000);
        }
      }
    },

    pushMoreCards(value) {
      if (value === 4) {
          this.cards = [
          {id: 0, number: 1, checked: false},
          {id: 1, number: 2, checked: false},
          {id: 2, number: 3, checked: false},
          {id: 3, number: 1, checked: false},
          {id: 4, number: 3, checked: false},
          {id: 5, number: 2, checked: false},
          {id: 6, number: 4, checked: false},
          {id: 7, number: 5, checked: false},
          {id: 8, number: 5, checked: false},
          {id: 9, number: 4, checked: false},
          {id: 10, number: 6, checked: false},
          {id: 11, number: 8, checked: false},
          {id: 12, number: 7, checked: false},
          {id: 13, number: 6, checked: false},
          {id: 14, number: 7, checked: false},
          {id: 15, number: 8, checked: false},
        ]
      }
      if (value === 6) {
          this.cards = [
          {id: 0, number: 1, checked: false},
          {id: 1, number: 2, checked: false},
          {id: 2, number: 3, checked: false},
          {id: 3, number: 1, checked: false},
          {id: 4, number: 3, checked: false},
          {id: 5, number: 2, checked: false},
          {id: 6, number: 4, checked: false},
          {id: 7, number: 5, checked: false},
          {id: 8, number: 5, checked: false},
          {id: 9, number: 4, checked: false},
          {id: 10, number: 6, checked: false},
          {id: 11, number: 8, checked: false},
          {id: 12, number: 7, checked: false},
          {id: 13, number: 6, checked: false},
          {id: 14, number: 7, checked: false},
          {id: 15, number: 8, checked: false},
          {id: 16, number: 9, checked: false},
          {id: 17, number: 10, checked: false},
          {id: 18, number: 11, checked: false},
          {id: 19, number: 12, checked: false},
          {id: 20, number: 10, checked: false},
          {id: 21, number: 13, checked: false},
          {id: 22, number: 14, checked: false},
          {id: 23, number: 12, checked: false},
          {id: 24, number: 14, checked: false},
          {id: 25, number: 15, checked: false},
          {id: 26, number: 16, checked: false},
          {id: 27, number: 16, checked: false},
          {id: 28, number: 11, checked: false},
          {id: 29, number: 15, checked: false},
          {id: 30, number: 9, checked: false},
          {id: 31, number: 13, checked: false},
          {id: 32, number: 17, checked: false},
          {id: 33, number: 18, checked: false},
          {id: 34, number: 17, checked: false},
          {id: 35, number: 18, checked: false},
        ]
      }
    }
  },
}
</script>

<style>
  .title {
    margin: 50px 0;
    font-size: 2em;
  }

  .container-block {
    display: flex;
    justify-content: space-between;

    width: 10%;
    margin-bottom: 30px;
  }

  .container-cards {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: center;
    align-content: center;
  }

  .card.noChecked{
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 100px;
    height: 100px;
    color: cornflowerblue;
    background-color: cornflowerblue;
  } 

  .card.checked {
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 100px;
    height: 100px;
  } 
</style>