<template>
  <div>
    <h2>Error</h2>
    <p>{{ message }}</p>
    <button @click="retry">Retry</button>
  </div>
</template>

<script setup>
defineProps({
  message: String,
  retry: Function,
})
</script>

<style lang="scss" scoped></style>
