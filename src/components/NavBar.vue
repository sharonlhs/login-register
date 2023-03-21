<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <RouterLink  class="nav-item nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-item nav-link" to="/login">Login</RouterLink>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>