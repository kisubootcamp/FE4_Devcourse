<script>
import FirstChild from '@/components/FirstChild.vue'

export default {
  name: 'App',
  components: {
    FirstChild,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>App Vue</h1>
  <h2 class="text-blue-500">h2</h2>
  <FirstChild />
</template>
<style scoped>
/* 태그 선택자 -> 제일 피해야함 */
/* 아이디, 클래스,전체, 속성, 자식, 그룹, 형제, 하위 선택자 */
h1 {
  color: red;
}
</style>
