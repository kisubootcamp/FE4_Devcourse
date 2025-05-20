<script>
export default {
  name: "03",
  data() {
    return {
      text: "<strong>HTML을 출력합니다</strong>",
    };
  },
};
</script>
<template>
  <div v-html="text"></div>
</template>
<style scoped></style>
