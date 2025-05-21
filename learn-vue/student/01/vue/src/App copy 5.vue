<script>
// 연습문제
export default {
  name: 'App',
  data() {
    return {
      items: ['사과', '바나나', '오렌지'],
      items2: { name: '홍길동', age: 25, job: '개발자' },
      items3: ['Apple', 'Banana', 'Cherry'],
      items4: ['Apple', 'Banana', 'Orange', 'Grapes'],
      buttons: ['Save', 'Cancel', 'Delete'],
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      fruits: ['Apple', 'Banana', 'Grapes'],
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      items5: ['Item 1', 'Item 2', 'Item 3'],
      items6: ['Apple', 'Banana', 'Orange'],
    }
  },
}
</script>
<template>
  <h1>Level 3) 연습문제</h1>
  <h3 v-for="value in items" :key="value">
    {{ value }}
  </h3>

  <h3 v-for="(value, key) in items2" :key>{{ key }} - {{ value }}</h3>

  <h3 v-for="(value, index) in items3" :key="value">{{ index }} - {{ value }}</h3>

  <h3 v-for="value in items4.filter((item) => item.includes('a'))" :key="value">
    {{ value }}
  </h3>

  <button v-for="value in buttons" :key="value">
    {{ value }}
  </button>

  <h3 v-for="(value, index) in cars" :key="index">
    {{ value.model }}의 가격은 {{ value.price }}원
  </h3>

  <h3 v-for="value in fruits" :key="value" :style="{ color: value === 'Apple' ? 'red' : 'green' }">
    {{ value }}
  </h3>
  <!-- <ul>
    <li v-for="fruit in items" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul> -->

  <ul>
    <li v-for="category in categories" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="item in category.items" :key="item">
          {{ item }}
        </li>
      </ul>
    </li>
  </ul>

  <ul>
    <!-- <li v-for="(item, index) in items5" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li> -->
    <li
      v-for="(item, index) in items5"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ item }}
    </li>
  </ul>

  <ul>
    <li v-for="item in items6" :key="item">{{ item }} // {{ item.length }}</li>
  </ul>
</template>
<style scoped></style>
