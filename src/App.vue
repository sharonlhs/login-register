<template>
  <div id="app">
    <NavBar />
  </div>
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
