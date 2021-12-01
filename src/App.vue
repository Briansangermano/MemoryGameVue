<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="navbar-nav">
        <router-link v-if="isLogged" class="nav-item nav-link" to="/profile">Profile</router-link>
        <router-link v-if="isLogged" class="nav-item nav-link" to="/players">Players</router-link>
        <router-link v-if="isLogged" class="nav-item nav-link" to="/game">Game</router-link>
      </div>
      <div class="navbar-nav">
        <div v-if="isLogged" @click="logoutClick"><router-link class="nav-item nav-link" to="/">Logout</router-link></div>
        <a class="navbar-brand"></a>
      </div>
    </nav>
    <router-view /> 
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from "vuex";
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

export default {
  name: 'App',

  methods: {
    ...mapActions(['logout']),
    logoutClick() { this.logout() },
  },

  computed: {
    ...mapState(["userLogged"]),
    isLogged() {
      if (this.userLogged && this.userLogged.name) return true
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

  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-item {
    margin-right: 10px;
  }
</style>
