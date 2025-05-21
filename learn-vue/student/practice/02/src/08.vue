<script>
export default {
  name: 'App',
  data() {
    return {
      selectedColor: '#ffffff',
    }
  },
}
</script>
<template>
  <p>{{ selectedColor }}</p>
  <input type="color" v-model="selectedColor" />
  <div
    :style="{
      width: '100px',
      height: '100px',
      border: '1px solid black',
      backgroundColor: selectedColor,
    }"
  ></div>
</template>
<style scoped></style>
