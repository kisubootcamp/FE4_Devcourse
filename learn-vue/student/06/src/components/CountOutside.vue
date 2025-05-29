<script setup>
import { useCountStore } from '@/stores/count'
import { storeToRefs } from 'pinia'

const countStore = useCountStore()
const { count, doubleCount } = storeToRefs(countStore)
</script>
<template>
  <h1>Count : {{ count }}</h1>
  <h2>doubleCount : {{ doubleCount }}</h2>
</template>
<style scoped></style>
