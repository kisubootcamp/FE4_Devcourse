<script>
export default {
  name: "App",
  data() {
    return {
      items: ["Apple", "Banana", "Cherry"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(value, index) in items">[{{ index }}] - {{ value }}</li>
  </ul>
</template>
