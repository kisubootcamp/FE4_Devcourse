<template>
  <div>
    {{ count }}
    {{ values.name }}
    {{ doubleCount }}
    {{ numArrs }}
    <button @click="increment">증가</button>
    <button @click="numArrs.push(4)">추가</button>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch, watchEffect } from 'vue'

//  데이터를 정의하는 방법
const count = ref(1)
const numArrs = reactive([1, 2, 3])

// 배열이나 객체를 정의하는 함수
const values = reactive({ name: 'jiyu' })

// computed
const doubleCount = computed(() => count.value * 2)

//methods
const increment = () => {
  count.value++
}

// watch
// watchEffect -> watch + deep + immediate
// watchPostEffect : watch + flush:true
watchEffect(() => {
  console.log(count.value)
})
watch(count, (n, o) => console.log(n, o))
watch(numArrs, (n, o) => console.log(n, o), {
  deep: true,
  immediate: true,
})
</script>

<style scoped></style>
