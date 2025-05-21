<template>
  <div>
    <label for="agree">회원가입 약관에 동의합니다.</label>
    <input type="checkbox" id="agree" v-model="checked" />
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
