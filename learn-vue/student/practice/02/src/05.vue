<script>
export default {
  name: 'App',
  data() {
    return {
      selected: 'apple',
    }
  },
}
</script>
<template>
  <h1>{{ selected }}</h1>
  <select v-model="selected">
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
    <option value="orange">오렌지</option>
  </select>
</template>
<style scoped></style>
