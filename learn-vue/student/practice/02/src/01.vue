<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    handleChange(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <h1>이름 : {{ name }}</h1>
  <input type="text" @input="handleChange" />
</template>
<style scoped></style>
