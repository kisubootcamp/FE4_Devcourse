<script>
// script 작성 방법
// Options API(뷰 버전 2.x ~) / Composition API(뷰 버전 3.x~)
// 클래스 컴포넌트             / 함수형 컴포넌트

// options api 방식
// 약속된 객체의 속성
// -- data: 뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속성
// 디렉티브
// - v-text
// - v-html: text로 작성된 html태그 적용됨
// - v-pre: 컴파일 대상으로 삼지 않음. 변화가 생기지 않는 하드코딩된 페이지 같은거에 적용하면 성능적인 면에서 나아짐.
// - v-bind: 데이터와 html속성을 연결해주는 역할 (축약형 -> :)
// 축약형(기존 디렉티브를 줄여서 쓸 수 있는 문법)
// 축약형 쓸거면 일관되게 쭉 축약형 사용 아니면 쭉 기본 사용
export default {
  name: 'App',
  // 객체 단축 속성명
  data() {
    return {
      message: '<em>Hello World!</em>',
      greet: 'Good, After noon!',
      name: 'yoojung',
      age: 30,
      src: 'https://cdn.pixabay.com/photo/2025/05/04/19/29/flowers-9578969_640.jpg',
      buttonClass: 'red',
      googleLink: 'https://www.google.com',
      style: {
        color: 'blue',
        textDecoration: 'underline',
      },
      class: 'blue-color',
      id: 'title',
    }
  },
  // 기본
  // data: function () {
  //   return {
  //     message: 'Hello World!',
  //   }
  // },
}
</script>
<template>
  <!-- 데이터 보간/텍스트 보간??방법 데이터만 출력 가능 -->
  <!-- <h1>{{ message }}</h1>
  <h1>{{ greet }}</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1> -->
  <div v-pre>
    <h1 v-pre>{{ message }}</h1>
    <h1 v-text="message"></h1>
    <!-- html 태그 적용가능 -->
    <h1 v-html="message"></h1>
  </div>

  <img :src alt="" width="300" />
  <h1 :class="buttonClass">11</h1>
  <a :href target="_blank">google</a>
  <h1 style="color: red; text-decoration: underline">red</h1>
  <h1 :style>red</h1>
  <h1 :id="id">Hello</h1>
  <h1 :id>Hello</h1>
</template>
<style scoped></style>
