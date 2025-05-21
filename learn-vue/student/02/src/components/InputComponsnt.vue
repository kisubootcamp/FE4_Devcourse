<template>
  <div>
    {{ email }}
    <input type="text" @keyup.enter="onKeyupHandler" @input="onInputHandler" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    onKeyupHandler(e) {
      console.log(e.target.value)
    },
    onInputHandler(e) {
      this.email = e.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
