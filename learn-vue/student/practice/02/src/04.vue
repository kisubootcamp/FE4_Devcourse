<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    handleChange(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <h1>{{ text }}</h1>
  <textarea name="textarea" @input="handleChange"></textarea>
</template>
<style scoped></style>
