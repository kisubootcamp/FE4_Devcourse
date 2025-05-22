<!-- javascript -->
<script>
// Options API(2.x) / Composition API(3.x)=>options API에 비해 문법이 간결함 말고 둘의 차이는 없음..
// 클래스 컴포넌트 / 함수형 컴포넌트
// 약속된 객체의 속성
// --data : 뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속성
// 디렉티브
// -v-html
// -v-text
// -v-pre
// -v-bind (축약형->:) html 속성을 vue에서도 "동적으로" 사용할 수 있도록 해줌
// -v-if(v-else-if, v-else) => 조건에 안맞으면 html태그 들어가지도 않음(렌더링x)
// -v-show 조건 안맞으면 html태그 안에 style=display:none으로 들어가 있음(토글에 주로 사용)
// -v-for (중첩도 가능)
// -v-cloak 컴포넌트가 준비될 떄까지 템플릿을 숨겨줌 -> 근데 이미 app이 mount된다음에 보여지기 때문에 현재 vite기반 우리 프로젝트에서는 사용할 일 없음
export default {
  // data: function(){} data(){}는 동일 역할
  data() {
    return {
      name: '군만두',
      message: '<em>Hello,World</em>',
      imgSrc: 'https://cdn.pixabay.com/photo/2025/05/07/19/13/soap-bubbles-9585871_1280.jpg',
      buttonClass: 'red',
      googleLink: 'https://www.google.com',
      customStyle: {
        color: 'blue',
        textDecoration: 'underline',
      },
      id: 'title',
      class: 'blue-color',
      condition: 'F',
      fruits: ['apple', 'banana', 'orange'],
      userObj: {
        name: '철수',
        age: 20,
      },
    }
  },
}
</script>

<!-- html -->
<template>
  <!-- 1. 데이터 보관법{{}} -->
  <!-- {{ text구간/콧수염 문법(mustache syntax) }} -->
  <div v-pre>
    <h1>EX:{{ name }}</h1>
    <!-- {{ isShow&&<p>Hello,World!</p> }} 불가능 -->

    <!-- name을 컴파일 대상으로 삼지 않음 {{name}} 이 자체로 출력-->
    <h1 v-pre>{{ name }}</h1>

    <!-- 2. v-text -->
    <h1 v-text="name"></h1>
    <!-- 에러 발생:<h1 v-text="name">ex</h1> -->

    <!-- 3. v-html: 데이터 내부에 태그가 존재시 태그 인식 가능 -->
    <h1 v-html="message"></h1>
  </div>

  <!-- 4. v-bind: html 속성 사용해야할때 연결해줌 (src,class,style...) -->
  <img v-bind:src="imgSrc" alt="dark" width="300" />

  <h1 v-bind:class="buttonClass">11</h1>
  <h1 :class="buttonClass">l1</h1>
  <!--축약형 속성과 속성값의 이름이 동일하면 축약가능 ex) href:href="", src:src=""-->
  <a :href="googleLink" target="_blank">google</a>
  <h1 style="color: red; text-decoration: underline">red</h1>
  <h1 :style="cutomStyle">red</h1>
  <h1 :id="id">Hello</h1>
  <h1 :id>Hello</h1>
  <!-- v-bind이름과 속성이름(?)이 동일할때-->

  <h1 v-if="condition === 'A'">A입니다.</h1>
  <h1 v-else-if="condition === 'B'">B입니다.</h1>
  <h1 v-else-if="condition === 'C'">C입니다.</h1>
  <h1 v-else>A~C는 아닙니다.</h1>
  <h1 v-show="condition === 'F'">F입니다.</h1>

  <ul>
    <li v-for="(value, index) in fruits" :key="index">[{{ index }}] - {{ value }}</li>
    <li v-for="value in fruits" :key="value">
      {{ value }}
      <ul>
        <li v-for="(value, key) in userObj" :key>key:{{ key }}-value:{{ value }}</li>
      </ul>
    </li>
  </ul>
</template>

<!-- css와 동일 -->
<style scoped></style>
