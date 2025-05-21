<template>
  <div>
    <h1>{{ age }}</h1>
    <input type="range" v-model="age" />
  </div>
</template>

<script>
export default {
  name: 'PracticeForm03',
  data() {
    return {
      age: 20,
    }
  },
}
</script>

<style lang="scss" scoped></style>
