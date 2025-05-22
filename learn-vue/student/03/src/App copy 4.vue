<script>
export default {
  name: 'App',
  data() {
    return {
      name: '철수',
    }
  },
  methods: {
    printHello() {
      console.log('hello')
    },
  },
}
</script>
<template>
  <FirstChild :name :print="printHello" @print-hello="printHello" />
  <button @click="() => console.log('click')">클릭</button>
</template>
<style scoped></style>
