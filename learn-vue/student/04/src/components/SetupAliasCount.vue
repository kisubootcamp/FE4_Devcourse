<script setup>
import { computed, reactive, ref, watch, watchPostEffect } from 'vue'

// ref, reactive
const count = ref(0)
const numArrs = reactive([1, 2, 3])
const message = ref('')
const pEl = ref(null)

// computed
const doubleCount = computed(() => count.value * 2)

// methods
const increment = () => (count.value += 1)

// watch
// watch(count, (n,o) => console.log(n, o))
// watchEffect -> watch + deep: true + immediate: true
// watchPostEffect -> watch + flush: post
watchPostEffect(() => {
  // 데이터 자동감시
  console.log(message.value)
  console.log(pEl.value?.innerText)
})
watch(numArrs, (n, o) => console.log(n, o))
</script>
<template>
  <h1>{{ count }}</h1>
  <h1>{{ doubleCount }}</h1>
  <button @click="increment">증가</button>
  <h1>{{ numArrs }}</h1>
  <button @click="numArrs.push(4)">추가</button>
  <p ref="pEl">{{ message }}</p>
  <input type="text" v-model="message" />
</template>
<style scoped></style>
