<script>
export default {
  name: 'App',
  data() {
    return {
      message: '<em>Hello, World!</em>',
      greet: 'Good, Afternoon!',
      name: 'Taetris',
      age: 26,
      imgSrc: 'https://cdn.pixabay.com/photo/2025/05/07/19/13/soap-bubbles-9585871_1280.jpg',
      btnclass: 'red',
      naverLink: 'https://www.naver.com/',
      customStyle: {
        color: 'blue',
        textDecoration: 'underline',
      },
      id: 'title',
      class: 'blue-color',
      condition: 'F',
    }
  },
}
</script>
<template>
  <h1>{{ message }}</h1>
  <h1>{{ greet }}</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1 v-text="message"></h1>
  <h1 v-html="message"></h1>
  <img v-bind:src="imgSrc" alt="dark" width="300" />
  <h1 v-bind:class="btnclass">11</h1>
  <a :href="naverLink" target="_blank">naver</a>
  <h1 :style="customStyle">red</h1>
  <h1 :id>Hello</h1>
  <h1 v-if="condition === 'A'">A입니다.</h1>
  <h1 v-else-if="condition === 'B'">B입니다.</h1>
  <h1 v-else-if="condition === 'C'">C입니다.</h1>
  <h1 v-else>A~C는 아닙니다.</h1>
  <h1 v-show="condition === 'F'">F입니다.</h1>
</template>
<style scoped></style>
