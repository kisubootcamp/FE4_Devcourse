<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
export default {
  inject: ['increment', 'decrement', 'reset'],
}
</script>

<style lang="scss" scoped></style>
