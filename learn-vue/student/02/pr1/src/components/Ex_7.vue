<script>
export default {
  name: 'Ex_7',
  data() {
    return {
      gender: 'male',
    }
  },
}
</script>
<template>
  <h1>Ex_7 Vue</h1>
  <p>성별: {{ gender }}</p>
  <label> <input v-model="gender" type="radio" name="gender" value="male" />남성</label>
  <label> <input v-model="gender" type="radio" name="gender" value="female" />여성</label>
  <hr />
</template>
<style scoped></style>
