<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex8',
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
  <ul>
    <li v-for="c in categorys" :key="c.name">
      {{ c.name }}
      <ul>
        <li v-for="v in c.items" :key="v">
          {{ v }}
        </li>
      </ul>
    </li>
  </ul>
</template>
