<script>
export default {
  name: 'App',
  data() {
    return {
      gender: 'male',
      className: 'a',
    }
  },
}
</script>
<template>
  <p>선택한 성별: {{ gender }}</p>
  <p>선택한 반: {{ className }}</p>
  <div>
    <label><input type="radio" v-model="gender" name="gender" value="male" />남자</label>
    <label><input type="radio" v-model="gender" name="gender" value="female" />여자</label>
  </div>
  <div>
    <label><input type="radio" v-model="className" name="className" value="a" />a</label>
    <label><input type="radio" v-model="className" name="className" value="b" />b</label>
  </div>
</template>
<style scoped></style>
