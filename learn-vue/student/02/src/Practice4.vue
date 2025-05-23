<script>
export default {
  name: 'App',
  data() {
    return {
      students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 },
      ],
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 },
        { name: '스마트폰', price: 60000 },
      ],
    }
  },
  computed: {
    sortAgeStudents() {
      return [...this.students].sort((a, b) => b.age - a.age)
    },
    productPrice() {
      return this.products.filter((product) => product.price > 50000)
    },
  },
  methods: {
    printComputedProps() {
      console.log(this.productPrice)
    },
  },
}
</script>
<template>
  <!-- 연습문제 Lv4 computed로 바꿔보기 -->
  <!-- 1 -->
  <ul>
    <li v-for="student in sortAgeStudents" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>

  <!-- 2 -->
  <ul>
    <li v-for="product in productPrice" :key="product.name">
      {{ product.name }} - {{ product.price }}
    </li>
  </ul>

  <button @click="printComputedProps">출력</button>
</template>
<style scoped></style>
