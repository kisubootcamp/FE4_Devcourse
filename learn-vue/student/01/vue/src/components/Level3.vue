<script>
export default {
  name: 'App',
  data() {
    return {
      items1: ['사과', '바나나', '오렌지'],
      items2: { name: '홍길동', age: 25, job: '개발자' },
      items3: ['Apple', 'Banana', 'Cherry'],
      items4: ['Apple', 'Banana', 'Orange', 'Grapes'],
      items5: ['Save', 'Cancel', 'Delete'],
      items6: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      items7: ['Apple', 'Banana', 'Grapes'],
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      items8: ['Item 1', 'Item 2', 'Item 3'],
      items9: ['Apple', 'Banana', 'Orange'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(value, index) in items1" :key="index">{{ value }}</li>
    <hr />

    <li v-for="(value, key) in items2" :key>{{ key }} - {{ value }}</li>
    <hr />

    <li v-for="(value, index) in items3" :key="index">[{{ index }}] {{ value }}</li>
    <hr />

    <li v-for="(value, index) in items4.filter((item) => item.includes('a'))" :key="index">
      {{ value }}
    </li>
    <hr />

    <li v-for="(value, index) in items5" :key="index">{{ value }}</li>
    <hr />

    <li v-for="(value, index) in items6" :key="index">{{ value.model }} - {{ value.price }}</li>
    <hr />

    <li v-for="fruit in items7" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
    <hr />

    <li v-for="category in categorys" :key="category.name">
      <ul>
        <li v-for="item in category.items" :key="item">{{ item }}</li>
      </ul>
    </li>
    <hr />

    <li v-for="(item, index) in items8" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li>
    <hr />

    <li v-for="item in items9" :key="item">{{ item }} - {{ item.length }}</li>
  </ul>
</template>
<style scoped></style>
