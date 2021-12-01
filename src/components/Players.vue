<template>
  <div class="container-profile">
      <p class="title">Players</p>
      <div class="container">
        <table>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
          <tr v-for="player in playerList" :key="player.id">
            <td>{{player.name}}</td>
            <td>{{player.username}}</td>
            <td>{{player.email}}</td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
    methods: {
      ...mapActions(["getPlayersList"]),
    },

    computed: {
      ...mapState(["playerList"]),
    },

    mounted () {
      this.getPlayersList();
    }
  }
</script>

<style scoped>
  .title {
    font-size: 2em;
  }

  .container-profile {
    margin-top: 5%;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .input-container {
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-control {
    padding: 10px;
    width: 250px;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 70%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>