<script>
export default {
  name: 'Ex_4',
  data() {
    return {
      text: '',
    }
  },
}
</script>
<template>
  <h1>Ex_4 Vue</h1>
  <p>{{ text === '' ? '입력하세요' : text }}</p>
  <textarea v-model="text"> </textarea>
  <hr />
</template>
<style scoped></style>
