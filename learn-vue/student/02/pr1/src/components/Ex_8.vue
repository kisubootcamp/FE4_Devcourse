<script>
export default {
  name: 'Ex_8',
  data() {
    return {
      selectedColor: '#ffffff',
    }
  },
}
</script>
<template>
  <h1>Ex_8 Vue</h1>
  <p>선택 색상: {{ selectedColor }}</p>
  <div
    :style="{
      width: '100px',
      height: '100px',
      border: '1px solid black',
      backgroundColor: selectedColor,
    }"
  ></div>
  <input type="color" v-model="selectedColor" />
</template>
<style scoped></style>
