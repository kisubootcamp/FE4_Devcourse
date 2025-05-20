<script>
export default {
  name: 'App',
  data() {
    return {
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
    }
  },
}
</script>
<template>
  <div v-html="isHtml ? htmlContent : plainContent"></div>
</template>
<style scoped></style>
