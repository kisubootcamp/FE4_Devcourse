<script>
export default {
  name: 'App',
  data() {
    return {
      message: '<strong>HTML을 출력합니다!</strong>',
    }
  },
}
</script>
<template>
  <!-- code here -->
  <h1 v-html="message"></h1>
</template>
<style scoped></style>
