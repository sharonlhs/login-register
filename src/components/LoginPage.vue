<template>
  <div class="wrapper">
    <h1>Login page</h1>
      <form class="login-form">
        <label>Email address:</label>
        <input class="input-field" v-model="email" placeholder="Enter email address"/>
        <label>Password:</label>
        <input class="input-field" v-model="password" placeholder="Enter password"/>
        
        <a href="" class="fgt-pwd">Forgot password?</a>
        <button class="cta-login">Login</button>
        <div class="signUp-link">
          <a href="">Not a user? Sign up now</a>   
        </div>
      </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      }
    }
  }
</script>

<style lang="scss">
@import "src/assets/styles.scss";
</style>