<template>
  <div class="container-profile">
      <p class="title">Profile</p>
      <form class="container">
        <div class="input-container">
          <p>Name:</p>
          <input @input="someHandler" v-model="userLogged.name" type="text" class="form-control">
        </div>
        <div class="input-container">
          <p>Email:</p>
          <input v-model="userLogged.email" type="text" class="form-control">
        </div>
        <div class="input-container">
          <p>Password:</p>
          <input v-model="userLogged.password" type="text" class="form-control">
        </div>
        <button :disabled="disabledButton" type="button" @click="saveUser" class="btn btn-primary">Save Profile</button>
      </form>
      
      <!-- MODAl -->
      <b-modal ref="my-modal" hide-footer>
        <div class="d-block text-center">
          <p class="p-modal">Was successfully saved</p>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </div>
      </b-modal>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  
  data: () => {
    return {
      email: "",
      password: "",
      name: "",
      disabledButton: true,
    };
  },

  computed: {
    ...mapState(["userLogged", "users"]),
  },

  methods: {
    someHandler() {
      this.disabledButton = false;
    },
    ...mapActions(['saveProfile']),
    showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    saveUser() {
        this.saveProfile(this.userLogged);
        this.showModal()
    },
  },
}
</script>

<style>
  .title {
    display: flex;
    font-size: 2em;
    justify-content: center;
  }

  .container-profile {
    margin-top: 5%;
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

  .btn.btn-primary {
    margin-top: 30px;
    border: 1px solid white;
  }

  p {
    color: white;
  }

  .p-modal {
    color: black;
  }

  .close {display: none;}
</style>