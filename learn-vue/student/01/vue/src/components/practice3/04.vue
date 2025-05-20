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
  <div>
    <ul>
      <li v-for="item in items.filter((item) => item.includes('a'))" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
