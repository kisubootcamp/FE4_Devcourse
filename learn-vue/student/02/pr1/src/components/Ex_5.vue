<script>
export default {
  name: 'Ex_5',
  data() {
    return {
      selectedFruit: 'apple',
    }
  },
}
</script>
<template>
  <h1>Ex_5 Vue</h1>
  <p>선택 과일: {{ selectedFruit }}</p>
  <select v-model="selectedFruit">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>
  <hr />
</template>
<style scoped></style>
