<script>
export default {
  name: "02",
  data() {
    return {
      weather: "sunny",
    };
  },
};
</script>
<template>
  <h1 v-if="weather === 'sunny'"></h1>
  <h1 v-else-if="weather === 'rainy'">rainy</h1>
  <h1 v-else>cloudy</h1>
</template>
<style scoped></style>
