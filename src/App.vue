<template>
<div id="app">
  <Dashboard />
  <div
    v-show="false"
    id="welcome"
  >
    <img
      alt="logo"
      src="./assets/logo.png"
    >
    <Welcome />
  </div>
</div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    Dashboard
  }
}
</script>

<style src="./assets/app.scss" lang="scss" />
