<template>
  <div>
    <textarea v-model="text" @input="onInputHandler" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'PracticeForm04',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onInputHandler(e) {
      this.text = e.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
