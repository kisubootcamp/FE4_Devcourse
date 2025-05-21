<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { model: "Tesla Model S", price: 79999 },
        { model: "BMW X5", price: 60999 },
        { model: "Audi Q7", price: 54999 },
      ],
    };
  },
};
</script>
<template>
  <div v-for="(itemObj, index) in items" :key="index">
    {{ itemObj.model }} - {{ itemObj.price }}
  </div>
</template>
