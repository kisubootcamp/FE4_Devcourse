<script>
export default {
  name: 'AssignLv3',
  data() {
    return {
      items: ['사과', '바나나', '오렌지'],
      person: { name: '홍길동', age: 25, job: '개발자' },
      fruits: ['Apple', 'Banana', 'Orange', 'Grapes'],
      buttons: ['Save', 'Cancel', 'Delete'],
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      fruits2: ['Apple', 'Banana', 'Grapes'],
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      items2: ['Item 1', 'Item 2', 'Item 3'],
      items3: ['Apple', 'Banana', 'Orange'],
    }
  },
}
</script>
<template>
  <p>연습문제 1</p>
  <ul>
    <li v-for="fruit in items" :key="fruit">{{ fruit }}</li>
  </ul>

  <p>연습문제 2</p>
  <ul>
    <li v-for="(value, key) in person" :key="key">key:{{ key }}-value:{{ value }}</li>
  </ul>

  <p>연습문제 3</p>
  <ul>
    <li v-for="(fruit, index) in items" :key="fruit">{{ index }}-{{ fruit }}</li>
  </ul>

  <p>연습문제 4</p>
  <ul>
    <li v-for="fruit in fruits.filter((f) => f.includes('a'))" :key="fruit">{{ fruit }}</li>
  </ul>
  <p>연습문제 5</p>
  <button v-for="text in buttons" :key="text">
    {{ text }}
  </button>

  <p>연습문제 6</p>
  <ul>
    <li v-for="(carObj, index) in cars" :key="index">
      <span>{{ carObj.model }}</span>
      -
      <span>{{ carObj.price }}</span>
    </li>
  </ul>

  <p>연습문제 7</p>
  <ul>
    <li v-for="(fruit, index) in fruits2" :key="index">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>

  <p>연습문제 8</p>
  <ul>
    <li v-for="(cateObj, index) in categorys" :key="index">
      {{ cateObj.name }}
      <ul>
        <li v-for="f in cateObj.items" :key="f">{{ f }}</li>
      </ul>
    </li>
  </ul>
  <p>연습문제 9</p>
  <ul>
    <li v-for="(item, index) in items2" :key="index">
      <span v-if="index === 0" style="font-weight: bold">{{ item }}</span>
      <span v-else>{{ item }}</span>
    </li>
  </ul>

  <p>연습문제 10</p>
  <ul>
    <li v-for="item in items3" :key="item">{{ item }}-{{ item.length }}</li>
  </ul>
</template>
<style scoped></style>
