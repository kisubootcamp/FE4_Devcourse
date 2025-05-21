<script>
export default {
  name: 'App',
  data() {
    return {
      isVisible: false,
    }
  },
}
</script>
<template>
  <!-- code here -->
  <h1 v-show="isVisible">조건이 참입니다!</h1>
</template>
<style scoped></style>
