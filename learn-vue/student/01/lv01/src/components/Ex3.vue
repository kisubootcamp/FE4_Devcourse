<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex3',
  data() {
    return {
      message: '<strong>HTML을 출력합니다!</strong>',
    }
  },
}
</script>
<template>
  <div v-html="message"></div>
</template>
