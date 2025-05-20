<script>
export default {
  name: 'App',
  data() {
    return {
      selectedOption: 'bold', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
    }
  },
}
</script>
<template>
  <!-- code here -->
  <h1 v-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
  <h1 v-else-if="selectedOption === 'bold'" v-html="messageHTML"></h1>
  <h1 v-else>텍스트</h1>
</template>
<style scoped></style>
