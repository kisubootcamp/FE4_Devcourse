<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <h1>NotFound {{ route.params.pathMatch }}</h1>
</template>
<style scoped></style>
