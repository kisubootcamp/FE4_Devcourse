<script>
export default {
  name: "App",
  data() {
    return {
      items: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <li
      v-for="item in items.filter((item) => item.includes('a'))"
      :key="item"
    ></li>
  </ul>
</template>
