<script>
export default {
  name: 'App',
  data() {
    return {
      gender: 'male',
    }
  },
}
</script>
<template>
  <h1>성별: {{ gender }}</h1>
  <label><input type="radio" v-model="gender" name="gender" value="male" />남자</label>
  <label><input type="radio" v-model="gender" name="gender" value="female" />여자</label>
</template>
<style scoped></style>
