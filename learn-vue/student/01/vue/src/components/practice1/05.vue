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
  <div v-show="isVisible">
    <h1>안녕하세요!</h1>
  </div>
</template>
<style scoped></style>
