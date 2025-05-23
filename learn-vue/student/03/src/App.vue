<!-- 스타일에 scoped가 있어야 다른 컴포넌트까지도 스타일 적용되는걸 막음 -->
<!-- 다른 컴포넌트(FirstChild)에서 div태그 안감싸고 바로 h1태그만 있으면 스타일 같이 적용시켜버림 -->
<!-- 자식의 루트 요소가 2개여도 부모의 스타일이 자식에 적용안됨 -->
<!-- import 경로에서 @는 src를 의미->나중에 폴더구조가 바뀌어도 src잘 찾아서 사용가능 -->
<!-- <script>
//지역등록
import FirstChild from '@/components/FirstChild.vue'

export default {
  name: 'App',
  components: {
    FirstChild,
  },
  data() {
    return {}
  },
  methods: {
    greet() {
      console.log('greet')
    },
    printHello(name, age) {
      console.log('hello', name, age)
    },
  },
}
</script> -->
<!-- day03-3 -->
<!-- <template>
  <h1>App Vue</h1>
  <h2 class="text-blue-500">h2</h2>
  <button @click="() => greet()">클릭</button>
  <FirstChild name="sucoding" :age="20" />
  <SecondChild
    my-custom-value="sucoding"
    @greet="greet"
    @print-hello="({ name, age }) => printHello(name, age)"
  /> -->
<!-- @print-hello="printHello"로 써도되지만 구조분해할당 불가능 -->
<!-- @print-hello : 사용자 정의 이벤트(커스텀 이벤트) / print-hello가 실행되는 시점은 SecondChild에서 $emit이 호출될떄?사용될떄?-->
<!-- </template> -->

<!-- <style scoped> -->
<!-- /* 태그 선택자 */
/* 아이디 선택자 */
/* 클래스 선택자 */
/* 전체 선택자 */
/* 속성 선택자*/
/* 자식 선택자 */
/* 그룹 선택자 */
/* 형제 선택자 */
/* 하위 선택자 */
/* h1 {
  color: red;
}
</style> */ -->

<script>
import CountGroup from './components/CountGroup.vue'
export default {
  name: 'App',
  components: {
    CountGroup, //지역등록방식
  },
  data() {
    return { count: 0 }
  },

  // 전역상태: provide-inject사용;
  // 데이터의 반응성이 깨짐(데이터를 자식컴포넌트에서 inject로 받은후 변경시켜도 적용이 안됨(추적불가)
  // =>callback함수로 감싸기,변수를 함수로 사용)
  // 함수로서 사용하면 vue가 의존성을 추적하게됨
  provide() {
    return {
      count: () => this.count,
      increment: this.increment,
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <CountGroup />
</template>
<style scoped></style>
