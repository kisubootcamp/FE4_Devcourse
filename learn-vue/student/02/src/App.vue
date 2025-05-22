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
      teamMembers: [
        { name: '홍길동', role: '개발자' },
        { name: '김철수', role: '디자이너' },
        { name: '이영희', role: '개발자' },
        { name: '박지민', role: '기획자' },
      ],
    }
  },
  computed: {
    sortedStudent() {
      return [...this.students].sort((a, b) => b.age - a.age)
    },
    filteredProduct() {
      return this.products.filter((product) => product.price > 50000)
    },
    groupMembers() {
      return this.teamMembers.reduce((acc, member) => {
        if (!acc[member.role]) {
          acc[member.role] = []
        }
        acc[member.role].push(member)
        return acc
      }, {})
    },
  },
}
</script>
<template>
  <!-- 문제1 -->
  <ul>
    <li v-for="student in sortedStudent" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>

  <!-- 문제2 -->
  <ul>
    <li v-for="product in filteredProduct" :key="product.name">
      {{ product.name }} - {{ product.price }}
    </li>
  </ul>

  <!-- 문제5 -->
  <ul>
    <li v-for="(members, index) in groupMembers" :key="index">
      {{ index }}
      <ul>
        <li v-for="member in members" :key="member">
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
