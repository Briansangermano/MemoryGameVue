<template>
  <div class="container">
    <div class="title">GAME</div>
    <div>Select a board:</div>
    <div class="container-block">
      <button class="button" @click="pushMoreCard(4)">4x4</button>
      <button class="button" @click="pushMoreCard(6)">6x6</button>
    </div>
    <div v-if="!finishedGame" class="container-cards">
      <div v-for="card in cards" :key="card.id" @click="checkCard(card)">
        <button v-if="!card.checked" class="card noChecked">{{card.number}}</button>
        <button disabled v-else class="card checked">{{card.number}}</button>
      </div>
    </div>
    <div v-if="finishedGame" class="container-message">
      <div>CONGRATULATION!</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";

export default {
  computed: {
    ...mapState(["cards"]),

    finishedGame() {
      return this.cards.length === 0
    }
  },

  methods: {
    ...mapActions(['chackedCard', 'pushMoreCards']),

    checkCard(cardSelected) { 
      this.chackedCard({ cardSelected });
    },

    pushMoreCard(value) {
      if (value === 4) {
        this.pushMoreCards([
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
        ])
      }
      if (value === 6) {
        this.pushMoreCards([
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
        ])
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
    width: 20%;
    margin: 15px 0 30px 0;
  }

  .container-cards {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
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

  .button {
    width: 100px;
  }

  .container-message {
    display: flex;
    justify-content: center;
    margin: 100px;
    font-size: 50px;
  }
</style>