<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import FirstChild from './components/FirstChild.vue'
import SecondChild from './components/SecondChild.vue'

//Data 선언
const count = ref(0)
const numArr = reactive([1, 2, 3])

//함수 선언
const increment = () => {
  count.value += 1
}

//계산된 속성 - computed
const doubleCount = computed(() => count.value * 2)

// 감시자 속성 - watch, watch Effect(deep:true, immediate:true),
watch(count, (n, o) => {
  console.log(n, o)
})

// 라이프사이클훅
// Options API에는 있던 훅이 Composition에서는  beforeCreate(), created() - x
// setup 이라는 영역 자체가 위 두가지를 대체
// onBeforeMount(), onMounted(), onBeforeUpdate(), onUpdated(), onBeforeUnmout(), onMounted()
onMounted(() => {
  console.log('onMounted')
})

//provide, inject
provide('count', count) // (제공할 key값, 제공할 데이터)
provide('increment', increment)
</script>
<template>
  <h1>count : {{ count }}</h1>
  <h1>double count : {{ doubleCount }}</h1>
  <h1>{{ numArr }}</h1>
  <button @click="increment">증가</button>
  <FirstChild name="sucoding" :age="20" @increment="increment" />
  <SecondChild />
</template>
<style scoped></style>
