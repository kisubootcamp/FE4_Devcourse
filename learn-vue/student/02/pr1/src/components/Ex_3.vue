<script>
export default {
  name: 'Ex_3',
  data() {
    return {
      age: 25,
    }
  },
}
</script>
<template>
  <h1>Ex_3 Vue</h1>
  <p>{{ age }}세</p>
  <input type="range" min="1" max="100" v-model="age" />
  <hr />
</template>
<style scoped></style>
