<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import FirstChild from './components/FirstChild.vue'
import SecondChild from './components/SecondChild.vue'

// 반응형 데이터를 정의하는 방법 - ref, reactive (data)
const count = ref(0)
const numArr = reactive([1, 2, 3])

// 함수를 정의하는 방법 - methods
const increment = () => {
  count.value += 1
}

// 계산된 속성 - computed
const doubleCount = computed(() => count.value * 2)

// 감시자 속성 - watch, watchEffect(deep:true, immediate: true), watchPostEffect(flush: 'post')
watch(count, (n, o) => {
  console.log(n, o)
})

// 라이프사이클 훅
// beforeCreate(), created() - x
onMounted(() => {
  console.log(numArr)
  console.log('onMounted')
})

// provide, inject
provide('count', count)
provide('increment', increment)
</script>
<template>
  <h1>count: {{ count }}</h1>
  <h1>doubleCount: {{ doubleCount }}</h1>
  <button @click="increment">증가</button>

  <!-- 컴포넌트 -->
  <FirstChild name="sucoding" :age="20" @increment="increment" />
  <SecondChild />
</template>
<style scoped></style>
