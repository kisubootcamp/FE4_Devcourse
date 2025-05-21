<script>
export default {
  name: 'App',
  data() {
    return {
      htmlCode: '<strong>HTML을 출력합니다!</strong>',
    }
  },
}
</script>
<template>
  <div v-html="htmlCode"></div>
</template>
<style scoped></style>
