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
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ index }} - {{ item }}</li>
    </ul>
  </div>
</template>
