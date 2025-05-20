<script>
export default {
  name: "05",
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>
<template>
  <div v-show="isVisible === true">조건이 참입니다</div>
</template>
<style scoped></style>
