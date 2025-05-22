<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange', 'Grapes'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="(value, index) in items.filter((item) => item.includes('a'))" :key="index">
      {{ value }}
    </li>
  </ul>
</template>
