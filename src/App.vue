<template>
<div id="app">
  <Dashboard/>
  <div id="welcome" hidden>
    <img alt="logo" src="./assets/logo.png">
    <Welcome msg="Aria Match"/>
  </div>
</div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Welcome from './components/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome,
    Dashboard
  }
}
</script>

<style>
div[hidden] { display: none; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
