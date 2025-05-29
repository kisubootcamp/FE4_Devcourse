<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import FirstChild from './components/FirstChild.vue'

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
  console.log(numArr)
  console.log(n, o)
})

// 라이프사이클 훅
// beforeCreate(), created() - X
// onBeforeMount(), onMounted(), onBeforeUpdate(), onUpdated(), onBeforeUnmount(), onUnmounted()
onMounted(() => {
  console.log('onMounted')
})

// provide, injfect
provide('count', count)
provide('increment', increment)
</script>
<template>
  <h1>count: {{ count }}</h1>
  <h1>doubleCount: {{ doubleCount }}</h1>
  <button @click="increment">증가</button>
  <FirstChild name="jungyu" :age="20" @increment="increment" />
</template>
<style scoped></style>
