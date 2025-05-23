<template>
  <h1>{{ currentCount }}</h1>
</template>

<script>
export default {
  inject: ['count'],
  computed: {
    currentCount() {
      return this.count()
    },
  },
}
</script>

<style lang="scss" scoped></style>
