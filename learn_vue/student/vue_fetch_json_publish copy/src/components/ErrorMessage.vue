<script setup>
defineProps({
  message: String,
  retry: Function,
})
</script>
<template>
  <h1>Error</h1>
  <h2>{{ message }}</h2>
  <button @click="retry">에러메시지</button>
</template>
<style scoped></style>
