<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex1',
  data() {
    return {
      items: ['사과', '바나나', '오렌지'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="fruit in items" :key="fruit">
      {{ fruit }}
    </li>
  </ul>
</template>
<style scoped></style>
