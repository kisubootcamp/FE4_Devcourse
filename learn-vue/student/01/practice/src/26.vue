<script>
export default {
  name: 'App',
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
  <!-- code here -->
  <ul>
    <li v-for="product in products.filter((el) => el.price > 50000)" :key="product.name">
      {{ product.name }}
    </li>
  </ul>
</template>
