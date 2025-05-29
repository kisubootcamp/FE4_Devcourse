<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import FirstChild from './components/FirstChild.vue'

// 반응형 데이터를 정의하는 방법 - ref, reactive (data)
const count = ref(0) // value로 값 접근 가능
const numArr = reactive([1, 2, 3]) // 할당된 값 자체로 값 접근 가능

// 함수를 정의하는 방법 - methods
const increment = () => {
  count.value += 1
}

// 계산된 속성 - computed
const doubleCount = computed(() => count.value * 2)

// 감시자 속성 - watch, watchEffect(deep:true, immediate:true), watchPostEffect(flush:'post')
watch(count, (n, o) => {
  console.log(n, o)
})

// 라이프사이클 훅
// beforeCreate(), created() - 컴포지션 API에선 없음 setup이 이 둘의 역할을 대체함
// onBeforeMount(), onMounted(), onBeforeUpdate(), onUpdated(), onBeforeUnmount(), onUnmounted()
onMounted(() => {
  console.log('onMounted')
  console.log(numArr)
})

// provide, inject
provide('count', count)
provide('increment', increment)
</script>
<template>
  <h1>count: {{ count }}</h1>
  <h1>doubleCount : {{ doubleCount }}</h1>
  <button @click="increment">증가</button>

  <!-- 컴포넌트 -->
  <FirstChild name="sucoding" :age="20" @increment="increment" />
</template>
<style scoped></style>
