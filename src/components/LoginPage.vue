<template>
  <div class="container mb-3 p-5">
    <form class="mx-auto col-10 col-md-8 col-lg-6" autocomplete="off">
      <h1 class="mb-3">Login page</h1>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <RouterLink class="link-primary" to="/signup">I am new. Register now</RouterLink>
        </div>
        <div class="col">
          <RouterLink class="link-primary float-end" to="/forgot-password">Forgot password?</RouterLink>
        </div>

      <button type="button" class="mt-3 col-12 btn btn-primary">Login</button>

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