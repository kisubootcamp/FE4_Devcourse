<script>
export default {
  name: 'App',
  data() {
    return {
      fruits: ['apple', 'banana', 'orange'],
      userObj: {
        name: '재건',
        age: 26,
      },
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(value, index) in fruits" :key="index">{{ value }}</li>
    <li v-for="(value, key) in userObj" :key="key">{{ value }}</li>
  </ul>
</template>
<style scoped></style>
