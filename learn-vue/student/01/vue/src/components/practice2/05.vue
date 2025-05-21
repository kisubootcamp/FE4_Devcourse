<script>
export default {
  name: 'App',
  data() {
    return {
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
    }
  },
}
</script>
<template>
  <div v-if="selectedOption === 'bold'">
    <div v-html="messageHTML"></div>
  </div>
  <div v-else-if="selectedOption === 'italic'">
    <div v-html="messageItalic"></div>
  </div>
</template>
<style scoped></style>
