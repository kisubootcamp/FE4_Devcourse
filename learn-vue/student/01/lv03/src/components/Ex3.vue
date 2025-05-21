<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex3',
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(fruit, index) in items" :key="fruit">{{ index }} - {{ fruit }}</li>
  </ul>
</template>
