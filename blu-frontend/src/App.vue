<template>
  <img alt="Vue logo" src="./assets/BLUPotentialLogo.png" style="width: 200px; height: 200px;">
  <main>
    <RouterView />
  </main>
</template>

<script>
// import {AboutView, DashboardView, LoginView} from "@/views";

export default {
  name: 'App',
  components: {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
