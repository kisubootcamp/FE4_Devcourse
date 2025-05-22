<script>
export default {
  name: 'App',
  data() {
    return {
      items: { name: '홍길동', age: 25, job: '개발자' },
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(value, key) in items" :key>{{ key }} : {{ value }}</li>
  </ul>
</template>
