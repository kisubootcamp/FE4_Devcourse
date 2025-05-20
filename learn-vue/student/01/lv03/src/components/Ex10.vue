<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex10',
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
    <li v-for="item in items" :key="item">{{ item }} // {{ item.length }}</li>
  </ul>
</template>
