<template>
  <div class="container mb-3 p-5">
    <form class="mx-auto col-10 col-md-8 col-lg-6" autocomplete="off">
      <h1 class="mb-3">Forgot Password</h1>
      <div class="mb-3">
        <label for="staticEmail">Email address</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com">
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">New password</label>
      </div>
      <div class="col-md-12 mt-3 text-center">
        <button type="button" class="mt-3 mb-3 col-12 btn btn-primary">Update Password</button>
        <RouterLink class="link-primary" to="/login">Login Now</RouterLink>
      </div>
    </form>

  </div>
</template>

<script>
</script>