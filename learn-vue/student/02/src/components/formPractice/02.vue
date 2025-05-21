<template>
  <div>
    <input type="checkbox" id="agree" v-model="checked" />
    <label for="agree">회원가입 약관에 동의합니다.</label>
    <h1>{{ checked ? '동의' : '동의하지 않음' }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PracticeForm02',
  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
