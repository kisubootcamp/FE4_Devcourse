<script>
export default {
  name: "01",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(value, index) in items">{{ value }}</li>
  </ul>
</template>
<style scoped></style>
