<script>
export default {
  name: 'Ex_2',
  data() {
    return {
      isChecked: false,
    }
  },
}
</script>
<template>
  <h1>Ex_2 Vue</h1>
  <p>동의여부: {{ isChecked ? '동의' : '비동의' }}</p>
  <label>회원가입 약관에 동의 합니다<input type="checkbox" v-model="isChecked" /></label>
  <hr />
</template>
<style scoped></style>
