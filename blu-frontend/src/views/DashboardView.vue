// Dashboard Page
<script>
export default {
  name: "DashboardView",
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    goToMapQueue() {
      this.$router.push({ name: 'mapqueue' });
    },
    goToPathHistory() {
      this.$router.push({ name: 'pathhistory'});
    },
    goToPairDevice() {
      this.$router.push({ name: 'pairdevice' });
    }
  },
}
</script>

<template>
  <button @click="goToLogin">Go to Login</button>

  <div class="dashboard-buttons">
    <button @click='goToMapQueue()' :class="['btn', 'btn-map']">Join Map Queue</button>
    <button @click='goToPathHistory()' :class="['btn', 'btn-paths']">Access Previous Paths</button>
    <button @click='goToPairDevice()'  :class="['btn', 'btn-pairing']">Pair New Device</button>
  </div>


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

.btn-map {
  background-color: #3659F5;
}

.btn-paths {
  background-color: #5581FF;
}

.btn-pairing {
  background-color: #75A3FF;
}


</style>