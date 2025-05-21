<script>
export default {
  name: '02',
  data() {
    return {
      isHTML: true,
      htmlContent: "<b>HTML을 사용한 텍스트</b>"
      plainContent: 'HTML을 사용하지 않은 텍스트'
    };
  },
};
</script>
<template>
  <div v-if="isHTML === true" v-html="htmlContent"></div>
  <div v-else>{{ plainContent }}</div>
</template>
<style scoped></style>
