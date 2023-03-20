<template>
  <div id="app">
    <NavBar />
  </div>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/">Login</RouterLink>

  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
@import "src/assets/styles.scss";
</style>
