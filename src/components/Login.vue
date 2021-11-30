<template>
  <div class="container">
    <div class="card-login">
      <h1>Sign In</h1>
      <div class="form-group">
          <input v-model="email" type="email" class="form-control" placeholder="Email" required>
          <input v-model="password" type="password" class="form-control" placeholder="Password" required>
          <input type="submit" class="btn-primary" @click="submit">
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
    ...mapState(["users", "userLogged"]),
  },
   
  methods: {
    ...mapActions(['submitLoging']),
    submit() {
        if (this.email === "" || this.password === "") {
          alert("You need complete fields");
        } else {
          if (this.userLogged) {
            this.submitLoging({ email: this.email, password: this.password});
            this.$router.push('profile');
          } else {
            alert("User not is registred");
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
  }
</style>
