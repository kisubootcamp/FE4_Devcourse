<template>
  <h1>Count : {{ countStore.count }}</h1>
</template>

<script setup>
import { useCountStore } from '../stores/count'

const countStore = useCountStore()
</script>

<style lang="scss" scoped></style>
