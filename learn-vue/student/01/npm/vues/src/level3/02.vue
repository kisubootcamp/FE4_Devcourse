<script>
export default {
  name: "02",
  data() {
    return {
      items: { name: "홍길동", age: 25, job: "개발자" },
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(value, key) in items">[{{ key }}] -{{ value }}</li>
  </ul>
</template>
<style scoped></style>
