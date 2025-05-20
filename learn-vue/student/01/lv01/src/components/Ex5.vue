<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex5',
  data() {
    return {
      isVisible: false,
    }
  },
}
</script>
<template>
  <h1 v-show="isVisible">조건이 참입니다!</h1>
</template>
<style scoped></style>
