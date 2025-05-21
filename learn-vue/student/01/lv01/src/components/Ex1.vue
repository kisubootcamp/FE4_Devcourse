<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex1',
  data() {
    return {
      true: true,
    }
  },
}
</script>
<template>
  <h1 v-if="true">조건이 참입니다!</h1>
</template>
<style scoped></style>
