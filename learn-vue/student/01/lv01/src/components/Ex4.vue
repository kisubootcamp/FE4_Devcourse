<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex4',
  data() {
    return {
      message: '<strong>HTML을 출력합니다!</strong>',
    }
  },
}
</script>
<template>
  <div v-text="message"></div>
</template>
<style scoped></style>
