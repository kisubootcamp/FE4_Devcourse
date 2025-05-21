<template>
  <div>
    <h1>{{ age }}</h1>
    <input type="range" v-model="age" min="1" max="100" />
  </div>
</template>

<script>
export default {
  name: 'PracticeForm03',
  data() {
    return {
      age: 25,
    }
  },
}
</script>

<style lang="scss" scoped></style>
