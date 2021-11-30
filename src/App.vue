<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link v-if="isLogged" class="nav-item nav-link" to="/profile">Profile</router-link>
          <router-link v-if="isLogged" class="nav-item nav-link" to="/players">Players</router-link>
          <router-link v-if="isLogged" class="nav-item nav-link" to="/game">Game</router-link>
        </div>
        <div class="navbar-nav">
          <div v-if="isLogged" @click="logoutClick"><router-link class="nav-item nav-link" to="/">Logout</router-link></div>
          <div v-else><router-link class="nav-item nav-link active" to="/">Login</router-link></div>
          <a class="navbar-brand"></a>
        </div>
      </div>
    </nav>
    <router-view /> 
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'App',

  methods: {
    ...mapActions(['logout']),
    logoutClick() { this.logout() },
  },

  computed: {
    ...mapState(["userLogged"]),
    isLogged() {
      if (this.userLogged.name) return true
      return false;
    }
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .collapse {
    display: flex;
    justify-content: space-between;
  }
</style>
