<script>
// 지역 등록
// import FirstChild from './components/FirstChild.vue'
// import SecondChild from './components/SecondChild.vue';

export default {
  name: 'App',
  // components: {
  //   FirstChild,
  // },
  data() {
    return {}
  },
  methods: {
    greet() {
      console.log('greet!')
    },
    printHello(useObj) {
      console.log('Hello', useObj.name, useObj.age)
    },
  },
}
</script>
<template>
  <!-- <h1>App Vue</h1> -->
  <!-- <FirstChild name="sucoding" :age="10" email="test@gmail.com" /> -->
  <SecondChild my-custom-value="sucoding" @greet="greet" @print-hello="printHello" />
</template>
<style scoped></style>
