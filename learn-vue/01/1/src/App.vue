<script>
// Options API(2.x) / Composition API(3.x)
// 클래스 컴포넌트      / 함수형 컴포넌트
// 약속된 객체의 속성
// -- data : 뷰에서 사용할 데이터(상태)를 정의할떄 사용하는 속성
// 디렉티브
// - v-html
// - v-text
// - v-pre
// - v-bind (축약형 : )
// - v-if(v-else-if, v-else)
export default {
  data: function () {
    return {
      message: '<em>Hello, World!</em>',
      greet: 'Good, After noon!',
      name: 'TY',
      age: 20,
      isShow: true,
      src: 'https://cdn.pixabay.com/photo/2025/05/06/12/19/hut-9582608_960_720.jpg',
      buttonclass: 'red',
      style: {
        color: 'blue',
        textDecoration: 'underline',
      },
      TitleStyle: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '50px',
      },
      id: 'title',
      class: 'blue-color',
      codition: 'D',
      fruits: ['apple', 'banana', 'orange'],
      userObj: {
        name: '철수',
        age: 20,
      },
    }
  },
}
</script>
<template>
  <h1 :style="TitleStyle">|v-text,v-html,v-pre 설명|</h1>
  <div v-pre>
    <h1>
      <span>EX: {{ message }}</span>
    </h1>
    <h1 v-text="message"></h1>
    <h1 v-html="message"></h1>
    <h1 v-pre>{{ message }}</h1>
  </div>

  <h1 :style="TitleStyle">|v-bind 설명|</h1>

  <img v-bind:src="src" width="300" height="300" />
  <img :src width="300" height="300" />
  <h1 v-bind:class="buttonclass">v-bind</h1>
  <h1 :class="buttonclass">v-bind 축약형</h1>
  <h1 style="color: red; text-decoration: underline">red</h1>
  <h1 :style>red</h1>
  <h1 :id="id">Hello</h1>
  <h1 :id>Hello</h1>

  <h1 :style="TitleStyle">|v-if 설명|</h1>
  <h1 v-if="codition === 'A'">A입니다.</h1>
  <h1 v-else-if="codition === 'B'">B입니다.</h1>
  <h1 v-else-if="codition === 'C'">C입니다.</h1>
  <h1 v-else>A~C는 아닙니다.</h1>

  <h1 :style="TitleStyle">|v-show 설명|</h1>
  <div v-show="codition === 'D'">
    <h1>A~C는 아닙니다.</h1>
  </div>

  <h1 :style="TitleStyle">|v-for 설명|</h1>
  <ul>
    <li v-for="(value, index) in fruits" :key="index">[{{ index }}] - {{ value }}</li>
    <br />
    <li v-for="(value, key) in userObj" :key>key: {{ key }} - value: {{ value }}</li>
    <br />
    <li v-for="(value, index) in fruits" :key="index">
      {{ value }}
      <ul>
        <li v-for="(value, key) in userObj" :key>key: {{ key }} - value: {{ value }}</li>
      </ul>
    </li>
  </ul>
</template>
