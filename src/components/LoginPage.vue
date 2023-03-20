<template>
  <div class="wrapper">
    <h1>Login page</h1>
      <form class="form-group">
        <label>Email address:</label>
        <input class="input-field" v-model="email" placeholder="Enter email address"/>
        <label>Password:</label>
        <input class="input-field" v-model="password" placeholder="Enter password"/>
        
        <a href="" class="fgt-pwd">Forgot password?</a>
        <button class="cta">Login</button>
        <div class="link">
          <a href="">Not a user? Register now</a>   
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