<template>
  <div class="wrapper">
    <h1>Forgot Password?</h1>
    <form class="form-group">
      <label>Email address:</label>
      <input class="input-field" v-model="email" placeholder="Enter email address" />
      <label>Password:</label>
      <input class="input-field" v-model="password" placeholder="Enter password" />
      <label>Re-enter password:</label>
      <input class="input-field" v-model="password" placeholder="Re-enter password" />
      <button class="cta">Update Password</button>
      <div class="link">
        <RouterLink class="nav-item nav-link" to="/login">Login Now</RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>

</script>