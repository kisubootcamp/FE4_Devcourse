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
  <div>
    <ul>
      <li v-for="item in items" :key="item">{{ item }} - {{ item.length }}</li>
    </ul>
  </div>
</template>
