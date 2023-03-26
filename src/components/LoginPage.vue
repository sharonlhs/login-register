<template>
  <div class="wrapper">
    <h1>Login page</h1>
    <form>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <div class="d-grid gap-2">
      <RouterLink class="link-primary float-end" to="/forgot-password">Forgot password?</RouterLink>
      <button type="button" class="btn btn-primary">Login</button>
      <RouterLink class="link-primary" to="/signup">I am new. Register now</RouterLink>
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