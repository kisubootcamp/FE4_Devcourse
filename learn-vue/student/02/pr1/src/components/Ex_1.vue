<script>
export default {
  name: 'Ex_1',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onChangeHandler(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <h1>Ex_1 Vue</h1>
  <p>이름: {{ name }}</p>
  <label>이름: <input type="text" @input="onChangeHandler" /></label>
  <hr />
</template>
<style scoped></style>
