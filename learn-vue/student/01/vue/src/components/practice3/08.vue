<script>
export default {
  name: 'App',
  data() {
    return {
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
    }
  },
}
</script>
<template>
  <div>
    <ul>
      <li v-for="category in categorys" :key="category.name">
        <h2>{{ category.name }}</h2>
        <ul>
          <li v-for="item in category.items" :key="item">{{ item }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
