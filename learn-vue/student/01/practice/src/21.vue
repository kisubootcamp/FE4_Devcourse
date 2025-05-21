<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Grapes'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="fruit in items" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>
</template>
