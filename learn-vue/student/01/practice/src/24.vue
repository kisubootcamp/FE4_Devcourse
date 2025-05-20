<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ value }} : {{ value.length }}</li>
  </ul>
</template>
