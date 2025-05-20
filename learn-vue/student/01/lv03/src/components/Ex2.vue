<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex2',
  data() {
    return {
      items: { name: '홍길동', age: 25, job: '개발자' },
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(v, k) in items" :key="k">{{ k }} - {{ v }}</li>
  </ul>
</template>
