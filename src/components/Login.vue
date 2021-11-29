<template>
  <div class="container">
    <div class="card-login">
      <h1>Sign In</h1>
      <form class="form-group">
          <input v-model="email" type="email" class="form-control" placeholder="Email" required>
          <input v-model="password" type="password" class="form-control" placeholder="Password" required>
          <input type="submit" class="btn-primary" @click="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},

  data: function() {
    return {
      email: "",
      password: "",
    };
  },
   
   methods: {
      submit() {
         if (this.email === "" || this.password === "") {
            alert("You need complete fields");
         } else {
            console.log("LOGIN", this.email, this.password)
            this.$router.push('profile')
         }
      }
   },
}
</script>

<style scope>
  .container {
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
