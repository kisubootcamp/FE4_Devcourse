<template>
  <div>
    <h1>{{ selected }}</h1>
    <label for="male">남자</label>
    <input type="radio" id="male" value="male" name="gender" v-model="selected" />
    <label for="female">여자</label>
    <input type="radio" id="female" value="female" name="gender" v-model="selected" />
  </div>
</template>

<script>
export default {
  name: 'PracticeForm07',
  data() {
    return {
      selected: 'male',
    }
  },
}
</script>

<style lang="scss" scoped></style>
