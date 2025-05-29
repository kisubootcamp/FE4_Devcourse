<script setup>
defineProps({
  message: String,
  retry: Function,
})
</script>
<template>
  <div>Error</div>
  <h2>{{ message }}</h2>
  <button @click="retry">retry</button>
</template>
<style scoped></style>
