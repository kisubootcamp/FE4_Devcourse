<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<template>
  <h1 v-if="isShow">조건이 참입니다!</h1>
</template>
<style scoped></style>
