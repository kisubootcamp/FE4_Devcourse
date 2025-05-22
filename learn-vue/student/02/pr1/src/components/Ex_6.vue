<script>
export default {
  name: 'Ex_6',
  data() {
    return {
      selectedFruits: [],
    }
  },
}
</script>
<template>
  <h1>Ex_6 Vue</h1>
  <p>선택 과일: {{ selectedFruits.join(', ') }}</p>
  <div>
    <label><input type="checkbox" v-model="selectedFruits" value="apple" />apple</label>
    <label><input type="checkbox" v-model="selectedFruits" value="banana" />banana</label>
    <label><input type="checkbox" v-model="selectedFruits" value="orange" />orange</label>
  </div>
  <hr />
</template>
<style scoped></style>
