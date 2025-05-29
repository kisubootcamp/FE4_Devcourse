<script setup>
import { useCountStore } from '@/stores/count'
import { storeToRefs } from 'pinia'
const countStore = useCountStore()
const { count } = storeToRefs(countStore)
</script>
<template>
  <!-- <h1>count : {{ countStore.count }}</h1> -->
  <h1>{{ count }}</h1>
</template>
<style scoped></style>
