<template>
  <div>
    <h1>{{ name }}</h1>
    <input type="text" @input="onInputHandler" />
  </div>
</template>

<script>
export default {
  name: 'PracticeForm01',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onInputHandler(e) {
      this.name = e.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
