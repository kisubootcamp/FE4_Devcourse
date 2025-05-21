<template>
  <div>
    <h1>{{ selected }}</h1>
    <select v-model="selected">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'PracticeForm05',
  data() {
    return {
      selected: 'apple',
    }
  },
}
</script>

<style lang="scss" scoped></style>
