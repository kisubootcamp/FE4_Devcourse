<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['사과', '바나나', '오렌지'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ value }}</li>
  </ul>
</template>
<style scoped></style>
