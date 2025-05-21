<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex5',
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
  <div v-if="selectedOption === 'bold'" v-html="messageHTML"></div>
  <div v-if="selectedOption === 'italic'" v-html="messageItalic"></div>
</template>
