<script>
export default {
  name: "App",
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li>
  </ul>
</template>
