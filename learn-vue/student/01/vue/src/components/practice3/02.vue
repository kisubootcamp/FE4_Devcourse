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
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item">{{ index }} - {{ item }}</li>
    </ul>
  </div>
</template>
