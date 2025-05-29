<script>
export default {
  name: 'App',

  // data: 뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속성
  data() {
    return {
      message: '<em>hello world</em>',
      greet: 'good!',
      name: 'jiyu',
      age: 23,
      src: 'https://cdn.pixabay.com/photo/2025/05/04/18/04/bird-9578746_1280.jpg',
      buttonClass: 'red',
      google: 'https://www.google.co.kr',
      customStyle1: {
        color: 'red',
        textDecoration: 'underline',
      },
      id: 'title',
      redClass: 'red-color',

      condition: 'a',
      fruits: ['apple', 'banana', 'orange'],
      user: {
        name: '철수',
        age: 23,
      },
    }
  },
}
</script>

<template>
  <h1>Ex : {{ message }}</h1>
  <h1 v-text="message"></h1>
  <h1 v-html="message"></h1>
  <h1 v-pre>{{ message }}</h1>
  <img :src="src" width="50%" />
  <h1 v-bind:class="buttonClass">{{ greet }}</h1>
  <h1>{{ name }}</h1>
  <a :href="google" target="_blank">google</a>
  <h1 :style="customStyle1">{{ age }}</h1>
  <!-- <h1 :style="customStyle1" :id class="blueClass">{{ age }}</h1> -->
  <h1>-----------------------------------------------------</h1>
  <h1 v-if="condition === 'a'">a</h1>
  <h1 v-else-if="condition === 'b'">b</h1>
  <h1 v-else>c</h1>
  <!-- 화면에 보였다 안보였다 할 수 있는 요소를 v-show 디렉티브로 사용 가능 -->
  <h1 v-show="condition === 'd'">d</h1>

  <ul>
    <li v-for="(value, index) in fruits" :key="index">[{{ index }}] - [{{ value }}]</li>
    <li v-for="(value, key) in user" :key>key : [{{ key }}] - value : [{{ value }}]</li>
  </ul>
</template>

<style scoped></style>
