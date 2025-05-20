<script>
export default {
  name: 'App',
  data() {
    return {
      isVisible: true,
    }
  },
}
</script>
<template>
  <h1 v-if="isVisible">조건이 참입니다!</h1>
</template>
<style scoped></style>
