<script>

export default {
  name: "MapQueueView",
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