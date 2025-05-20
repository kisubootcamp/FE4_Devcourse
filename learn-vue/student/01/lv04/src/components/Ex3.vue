<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex3',
  data() {
    return {
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        {
          name: 'Vegetables',
          items: [
            'Carrot',
            'Broccoli',
            { name: 'Leafy Vegetables', items: ['Spinach', 'Lettuce'] },
          ],
        },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="category in categories" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          <div v-if="typeof item === 'string'">{{ item }}</div>
          <div v-else>
            <span> {{ item.name }}</span>
            <ul>
              <li v-for="(v, i) in item.items" :key="i">
                {{ v }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>
