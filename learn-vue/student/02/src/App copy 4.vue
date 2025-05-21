<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      amount: 0,
    }
  },
  methods: {
    incrementByCount() {
      this.count += 1
    },
    incrementByAmount() {
      this.amount += 1
    },
  },
}
</script>
<template>
  <!-- v-once -->
  <!-- v-memo -->
  <div v-memo="[count, amount]">
    <h1>count: {{ count }}</h1>
    <button @click="incrementByCount">increment</button>
    <h1>amount: {{ amount }}</h1>
    <button @click="incrementByAmount">amount</button>
  </div>
</template>
<style scoped></style>
