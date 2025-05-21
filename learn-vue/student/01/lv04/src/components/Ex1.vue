<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex1',
  data() {
    return {
      students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="v in students.sort((a, b) => b.age - a.age)" :key="v.name">
      {{ v.name }} - {{ v.age }}
    </li>
  </ul>
</template>
