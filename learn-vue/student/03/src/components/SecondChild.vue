<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },
  emits: ['greet', 'printHello'], //자식->부모애게 값전달달
  props: {
    myCustomValue: {
      type: String,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('greet')
    },
  },
}
</script>
<template>
  <!-- App.vue에서 SecondChild의 전달 변수명은 my-custom-value처럼(케밥) 작성하고 너무 길면 여기서는 카멜케이스로 써두댐댐-->
  <h1>SecondChild Vue</h1>
  <h1>{{ myCustomValue }}</h1>

  <button @click="$emit('greet')">클릭</button>
  <button @click="clickHandler">클릭</button>
  <!--둘이 같은건가? -->

  <button @click="$emit('printHello', { name: 'sucoding', age: 30 })">클릭</button>
</template>
<style scoped></style>
