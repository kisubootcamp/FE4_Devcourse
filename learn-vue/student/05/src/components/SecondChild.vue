<script setup>
import { inject } from 'vue'

const count = inject('count')
const increment = inject('increment')
</script>
<template>
  <h1>SecondChildvue {{ count }}</h1>
  <button @click="increment">increment</button>
  <h1></h1>
</template>
<style scoped></style>
