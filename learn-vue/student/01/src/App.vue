<script>
export default {
  name: 'App',
  data() {
    return {
      condition: 'f',
      fruits: ['apple', 'banana', 'orange'],
      userObj: {
        name: '지은',
        age: 20,
      },
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(value, index) in fruits" :key="index">[{{ index }}] -{{ value }}</li>
    <li v-for="(value, key) in userObj" :key>key : {{ key }} - value: {{ value }}</li>
  </ul>
</template>
<style scoped></style>
