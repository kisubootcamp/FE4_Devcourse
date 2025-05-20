<script>
export default {
  name: "App",
  data() {
    return {
      categorys: [
        { name: "Fruits", items: ["Apple", "Banana"] },
        { name: "Vegetables", items: ["Carrot", "Broccoli"] },
      ],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="category in categorys" :key="category">
      <ul>
        {{
          category.name
        }}
        <li v-for="item in category.items" :key="item">{{ item }}</li>
      </ul>
    </li>
  </ul>
</template>
