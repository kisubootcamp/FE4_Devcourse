<script>
export default {
  name: "05",
  data() {
    return {
      selectedOption: "italic",
      messageHTML: "<strong>텍스트</strong>",
      messageItalic: "<em>텍스트</em>",
    };
  },
};
</script>
<template>
  <div v-if="selectedOption === italic" v-html="messageHTML"></div>
  <div v-else-if="selectedOption === 'bold'" v-html="messageItalic"></div>
</template>
<style scoped></style>
