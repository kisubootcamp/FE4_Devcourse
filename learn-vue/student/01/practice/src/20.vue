<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ value.model }} : {{ value.price }}</li>
  </ul>
</template>
