<script>
export default {
  name: 'BaseTimer',
  data() {
    return {
      count: 0,
      interval: null,
    }
  },
  beforeMount() {
    this.interval = setInterval(() => {
      this.count += 1
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.interval) // 메모리 누수를방지
  },
}
</script>
<template>
  <h1>count: {{ count }}</h1>
</template>
<style scoped></style>
