<template>
  <button @click="countDown">-</button>
  <button @click="countReset">0</button>
  <button @click="countUp">+</button>
</template>

<script setup>
import { useCountStore } from '../stores/count'

const countStore = useCountStore()

const { countUp, countDown, countReset } = countStore
</script>

<style lang="scss" scoped></style>
