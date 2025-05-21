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
  <div>
    <ul>
      <li v-for="item in items" :key="item.model">{{ item.model }} - {{ item.price }}</li>
    </ul>
  </div>
</template>
