<template>
<div id="app">
  <Dashboard />
  <Footer />
</div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Footer from './components/Footer.vue'
// import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    // Welcome,
    Footer,
    Dashboard
  }
}
</script>

<style src="./assets/app.scss" lang="scss" />
