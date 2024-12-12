<template>
  <img alt="Vue logo" src="./assets/BLUPotentialLogo.png" style="width: 200px; height: 200px;">
  <LoginView/>
  <Dashboard/>
</template>

<script>
import LoginView from "@/components/LoginView.vue";
import Dashboard from "@/components/Dashboard.vue";


export default {
  name: 'App',
  components: {
    LoginView,
    Dashboard,
  }
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
