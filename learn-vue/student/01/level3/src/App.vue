<script>
export default {
  name: 'App',
  data() {
    return {
      ex1items: ['사과', '바나나', '오렌지'],
      ex2items: { name: '홍길동', age: 25, job: '개발자' },
      ex3items: ['Apple', 'Banana', 'Cherry'],
      ex4items: ['Apple', 'Banana', 'Orange', 'Grapes'],
      ex5items: ['Save', 'Cancel', 'Delete'],
      ex6items: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      ex7items: ['Apple', 'Banana', 'Grapes'],
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      ex9items: ['Item 1', 'Item 2', 'Item 3'],
      ex10items: ['Apple', 'Banana', 'Orange'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="fruit in ex1items" :key="fruit">{{ fruit }}</li>
  </ul>
  <ul>
    <li v-for="(value, key) in ex2items" :key>{{ key }} - {{ value }}</li>
  </ul>
  <ul>
    <li v-for="(fruits, index) in ex3items" :key="fruits">{{ index }} - {{ fruits }}</li>
  </ul>
  <ul>
    <li v-for="fruitss in ex4items.filter((fruitss) => fruitss.includes('a'))" :key="fruitss">
      {{ fruitss }}
    </li>
  </ul>
  <ul>
    <button v-for="text in ex5items" :key="text">{{ text }}</button>
  </ul>
  <ul>
    <!-- <li v-for="items in ex6items" :key="items">{{ items.model }} - {{ items.price }}</li> -->
    <li v-for="(items, index) in ex6items" :key="index">
      <span>{{ items.model }}</span
      ><span> - </span><span>{{ items.price }}</span>
    </li>
  </ul>
  <ul>
    <li v-for="fruit in ex7items" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>
  <ul>
    <li v-for="category in categorys" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="item1 in category.items" :key="item1">
          {{ item1 }}
        </li>
      </ul>
    </li>
  </ul>
  <ul>
    <li v-for="(item2, index) in ex9items" :key="index">
      <strong v-if="index === 0">{{ item2 }}</strong>
      <p v-else>{{ item2 }}</p>
    </li>
  </ul>
  <ul>
    <li v-for="item3 in ex10items" :key="item3">{{ item3 }} - {{ item3.length }}</li>
  </ul>
</template>
<style scoped></style>
