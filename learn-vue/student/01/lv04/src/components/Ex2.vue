<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex2',
  data() {
    return {
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 },
        { name: '스마트폰', price: 60000 },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="v in products.filter((v) => v.price >= 50000)" :key="v.name">
      {{ v.name }} - {{ v.price }}
    </li>
  </ul>
</template>
