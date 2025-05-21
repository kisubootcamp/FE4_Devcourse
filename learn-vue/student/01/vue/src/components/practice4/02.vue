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
  <div>
    <ul>
      <template v-for="product in products" :key="product.name">
        <li v-if="product.price >= 50000">{{ product.name }} - {{ product.price }}</li>
      </template>
    </ul>
  </div>
</template>
