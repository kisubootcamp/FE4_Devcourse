<script setup>
import { computed, ref, provide } from 'vue'
import FirstChild from './components/FirstChild.vue'

// 반응형 데이터를 정의하는 방법 - ref, reactive
const count = ref(1)
// const numArr = reactive([1, 2, 3])

// 함수정의
const increment = () => {
  count.value++
}

// 계산된 속성 - method
const double = computed(() => count.value * 2)

// 감시자 속성 : watch, watchEffect(deep:true, immediate:true),
// watchPostEffect(flush:'post')

// 라이프사이클 훅

//provide, inject
provide('count', count)
provide('increment', increment)
</script>
<template>
  <h1>App</h1>
  <h1>count : {{ count }}</h1>
  <h1>count : {{ double }}</h1>
  <button @click="increment">증가바오</button>
  <FirstChild name="정쥬" :age="20" @increment="increment" />
</template>
<style scoped></style>
