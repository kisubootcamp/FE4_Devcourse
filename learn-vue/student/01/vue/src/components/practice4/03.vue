<script>
export default {
  name: 'App',
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
      <span>{{ category.name }}</span>
      <ul>
        <li v-for="item in category.items" :key="item">
          <span v-if="typeof item === 'string'">{{ item }}</span>
          <template v-else>
            <span>{{ item.name }}</span>
            <ul>
              <li v-for="subItem in item.items" :key="subItem">
                {{ subItem }}
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>
