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
      return this.cards.filter(i => i.memorized).length === this.cards.length
    }
  },

  mounted () {
    this.pushMoreCards([
      {id: 0, number: 1, checked: false, memorized: false},
      {id: 1, number: 2, checked: false, memorized: false},
      {id: 2, number: 3, checked: false, memorized: false},
      {id: 3, number: 1, checked: false, memorized: false},
      {id: 4, number: 3, checked: false, memorized: false},
      {id: 5, number: 2, checked: false, memorized: false},
      {id: 6, number: 4, checked: false, memorized: false},
      {id: 7, number: 5, checked: false, memorized: false},
      {id: 8, number: 5, checked: false, memorized: false},
      {id: 9, number: 4, checked: false, memorized: false},
      {id: 10, number: 6, checked: false, memorized: false},
      {id: 11, number: 8, checked: false, memorized: false},
      {id: 12, number: 7, checked: false, memorized: false},
      {id: 13, number: 6, checked: false, memorized: false},
      {id: 14, number: 7, checked: false, memorized: false},
      {id: 15, number: 8, checked: false, memorized: false},
    ])
  },

  methods: {
    ...mapActions(['chackedCard', 'pushMoreCards']),

    checkCard(cardSelected) { 
      this.chackedCard({ cardSelected });
    },

    pushMoreCard(value) {
      if (value === 4) {
        this.pushMoreCards([
          {id: 0, number: 1, checked: false, memorized: false},
          {id: 1, number: 2, checked: false, memorized: false},
          {id: 2, number: 3, checked: false, memorized: false},
          {id: 3, number: 1, checked: false, memorized: false},
          {id: 4, number: 3, checked: false, memorized: false},
          {id: 5, number: 2, checked: false, memorized: false},
          {id: 6, number: 4, checked: false, memorized: false},
          {id: 7, number: 5, checked: false, memorized: false},
          {id: 8, number: 5, checked: false, memorized: false},
          {id: 9, number: 4, checked: false, memorized: false},
          {id: 10, number: 6, checked: false, memorized: false},
          {id: 11, number: 8, checked: false, memorized: false},
          {id: 12, number: 7, checked: false, memorized: false},
          {id: 13, number: 6, checked: false, memorized: false},
          {id: 14, number: 7, checked: false, memorized: false},
          {id: 15, number: 8, checked: false, memorized: false},
        ])
      }
      if (value === 6) {
        this.pushMoreCards([
          {id: 0, number: 1, checked: false, memorized: false},
          {id: 1, number: 2, checked: false, memorized: false},
          {id: 2, number: 3, checked: false, memorized: false},
          {id: 3, number: 1, checked: false, memorized: false},
          {id: 4, number: 3, checked: false, memorized: false},
          {id: 5, number: 2, checked: false, memorized: false},
          {id: 6, number: 4, checked: false, memorized: false},
          {id: 7, number: 5, checked: false, memorized: false},
          {id: 8, number: 5, checked: false, memorized: false},
          {id: 9, number: 4, checked: false, memorized: false},
          {id: 10, number: 6, checked: false, memorized: false},
          {id: 11, number: 8, checked: false, memorized: false},
          {id: 12, number: 7, checked: false, memorized: false},
          {id: 13, number: 6, checked: false, memorized: false},
          {id: 14, number: 7, checked: false, memorized: false},
          {id: 15, number: 8, checked: false, memorized: false},
          {id: 16, number: 9, checked: false, memorized: false},
          {id: 17, number: 10, checked: false, memorized: false},
          {id: 18, number: 11, checked: false, memorized: false},
          {id: 19, number: 12, checked: false, memorized: false},
          {id: 20, number: 10, checked: false, memorized: false},
          {id: 21, number: 13, checked: false, memorized: false},
          {id: 22, number: 14, checked: false, memorized: false},
          {id: 23, number: 12, checked: false, memorized: false},
          {id: 24, number: 14, checked: false, memorized: false},
          {id: 25, number: 15, checked: false, memorized: false},
          {id: 26, number: 16, checked: false, memorized: false},
          {id: 27, number: 16, checked: false, memorized: false},
          {id: 28, number: 11, checked: false, memorized: false},
          {id: 29, number: 15, checked: false, memorized: false},
          {id: 30, number: 9, checked: false, memorized: false},
          {id: 31, number: 13, checked: false, memorized: false},
          {id: 32, number: 17, checked: false, memorized: false},
          {id: 33, number: 18, checked: false, memorized: false},
          {id: 34, number: 17, checked: false, memorized: false},
          {id: 35, number: 18, checked: false, memorized: false},
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