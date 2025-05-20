<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li
      v-for="(value, index) in items"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ value }}
    </li>
  </ul>
</template>
