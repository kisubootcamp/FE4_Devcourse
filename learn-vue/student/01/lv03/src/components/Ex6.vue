<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex6',
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
  <ul>
    <li v-for="(v, i) in items" :key="i">
      <span>{{ v.model }}</span>
      <span> - </span>
      <span>{{ v.price }}</span>
    </li>
  </ul>
</template>
