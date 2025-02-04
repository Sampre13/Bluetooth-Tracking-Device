<script>
export default {
  name: "LandingView",
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToRegisterAccount() {
      this.$router.push({ name: 'register' });
    },
  },
}
</script>

<template>
  <button @click="goToLogin">Go to Login</button>
  <button @click="goToRegisterAccount">Register an Account</button>

</template>

<style scoped>
.dashboard-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}
.btn {
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}



</style>