<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="(value, index) in items" :key="index">[{{ index }}] : {{ value }}</li>
  </ul>
</template>
