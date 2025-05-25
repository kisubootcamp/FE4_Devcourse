<script setup>
import { ref, reactive, computed, watch, watchEffect, watchPostEffect } from 'vue'
import CustomerList from './components/CustomerList.vue'

// ref, reactive
const count = ref(0)
const numArrs = reactive([1, 2, 3])

// computed
const doubleCount = computed(() => count.value * 2)

// methods
const increment = () => (count.value += 1)

// watch
// watch(count, (n, o) => console.log(n, o))
// watchEffect -> watch + depp: true + immediate: true
// watchPostEffect -> watch + flush: 'post'
watchPostEffect(() => {
  // 데이터 자동감시
  console.log(message.value)
  console.log(pEl.value?.innerText)
})

watch(numArrs, (n, o) => console.log(n, o), {
  deep: true,
  immediate: true,
  flush: 'post',
})
</script>
<template>
  <h2>{{ count }}</h2>
  <h2>{{ doubleCount }}</h2>
  <button @click="increment">증가</button>
  <h2>{{ numArrs }}</h2>
  <button @click="numArrs.push(4)">추가</button>
  <br /><br />
  <p ref="pEl">{{ message }}</p>
  <input type="text" v-model="message" />
</template>
<style scoped></style>
