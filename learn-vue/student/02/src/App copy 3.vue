<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    onKeyupHandler(event) {
      console.log(event.key)
    },
    onsubmitHandler() {},
  },
}
</script>
<template>
  <!-- 이벤트 수식어(modifier) -->
  <!-- 이벤트의 처리 방식을 제어하는 데 사용하는 기능 -->
  <form @submit.prevent="onsubmitHandler">
    <input type="text" @keydown.enter="onKeyupHandler($event)" />
    <input type="text" @keydown.tab="onKeyupHandler($event)" />
    <input type="text" @keydown.alt.enter="onKeyupHandler($event)" />
    <button type="submit">전송</button>
  </form>
  <a href="https://naver.com" @click.prevent>네이버 바로가기</a>
</template>
<style scoped></style>
