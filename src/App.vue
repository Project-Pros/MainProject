<template>
  <div id="app">
      <header class="app-header">
        <app-nav></app-nav>
      </header>
      <main class="container">
        <router-view></router-view>
      </main>
  </div>
</template>

<script>
/**
 * Main page of the application that controls routing and pages showing up
 */
import AppNav from './components/AppNav'

export default {
  components: {
    AppNav
  }
}
</script>

<style>
#app {
  font-family: Calibri, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
;
}

</style>
