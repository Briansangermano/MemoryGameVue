<template>
  <div class="container-profile">
      <p class="title">PROFILE</p>
      <div class="container">
        <div class="input-container">
          <p>Name:</p>
          <input v-model="userLogged.name" type="text" class="form-control">
        </div>
        <div class="input-container">
          <p>Email:</p>
          <input v-model="userLogged.email" type="text" class="form-control">
        </div>
        <div class="input-container">
          <p>Password:</p>
          <input v-model="userLogged.password" type="text" class="form-control">
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  
   data: () => {
    return {
      email: "",
      password: "",
      name: "",
    };
  },

  computed: {
    ...mapState(["userLogged"]),
  },

  mounted () {
    console.log("PASO", this.userLogged)
  }
}
</script>

<style>
  .title {
    font-size: 2em;
  }

  .container-profile {
    margin-top: 10%;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .input-container {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-control {
    padding: 10px;
    width: 250px;
  }
</style>