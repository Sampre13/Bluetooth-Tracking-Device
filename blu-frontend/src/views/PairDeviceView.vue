<script>

export default {
  name: "PairDeviceView",
  methods: {
    goToDashboard() {
      this.$router.push({ name: 'dashboard' });
    },

  },
}
</script>

<template>
  <div>
    <button @click="goToDashboard()">Go To Dashboard</button>
  </div>
</template>