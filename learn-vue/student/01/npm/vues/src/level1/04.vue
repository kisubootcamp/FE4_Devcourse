<script>
export default {
  name: "04",
  data() {
    return {
      message: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <div v-text="message"></div>
</template>
<style scoped></style>
