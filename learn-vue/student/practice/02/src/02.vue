<script>
export default {
  name: 'App',
  data() {
    return {
      checked: false,
    }
  },
}
</script>
<template>
  <h1>{{ checked ? '동의' : '비동의' }}</h1>
  <label>
    <input type="checkbox" v-model="checked" name="약관동의" />
    회원가입 약관에 동의합니다
  </label>
</template>
<style scoped></style>
