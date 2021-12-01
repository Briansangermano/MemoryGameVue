<template>
  <div class="container">
    <div class="card-login">
      <h1>Sign In</h1>
      <div class="form-group">
          <input v-model="email" type="email" class="form-control" placeholder="Email" required>
          <input v-model="password" type="password" class="form-control" placeholder="Password" required>
          <b-spinner v-if="fetchingData" class="spinner"></b-spinner>
          <button v-else type="button" @click="submit" class="btn btn-primary">Submit</button>
          <p class="error" v-if="error">Error on the login</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";

export default {
  name: 'Login',
  props: {},

  data: () => {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapState(["users", "userLogged", "fetchingData", "error"]),
  },
   
  methods: {
    ...mapActions(['submitLoging']),
    submit() {
        if (this.email === "" || this.password === "") {
          alert("You need complete fields");
        } else {
          this.submitLoging({ email: this.email, password: this.password});
          if (this.userLogged) {
            this.$router.push('profile');
          }
        }
    },
  },
}
</script>

<style scoped>
  .container {
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }
  
  .card-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-control {
    margin: 10px;
    padding: 10px;
    width: 250px;
  }

  .btn-primary {
    margin-top: 10px;
    padding: 10px;
    width: 100px;
    border: 1px solid white;
  }

  h1 {
    display: flex;
    justify-content: center;
    color: white;
  }

  .error {
    color: crimson;
    margin-top: 20px;
    font-size: 0.90em;
  }
</style>
