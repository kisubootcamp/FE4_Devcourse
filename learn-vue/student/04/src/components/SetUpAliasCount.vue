<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
  watchPostEffect,
} from 'vue'

// ref, reactive
const count = ref(0) // 배열, 객체, 기본자료형
const numArr = ref([1, 2, 3])
const numArr2 = reactive([1, 2, 3])
const userObj = reactive({ name: 'sucoding' }) // 객체, 배열
const message = ref('')
const pEl = ref(null)

// computed
const doubleCount = computed(() => count.value * 2)

//methods
const increment = () => (count.value += 1)

// watch
watch(count, (n, o) => console.log(n, o))
// watchEffect = watch + deep: true + immediate: true
watchEffect(() => {
  console.log(count.value) // 데이터 자동감시

  console.log(message.value) //
  console.log(pEl.value?.innerText) // Dom참조
})

watchPostEffect(() => {
  console.log(message.value) //
  console.log(pEl.value?.innerText) // Dom참조
})
watch(numArr2, (n, o) => console.log(n, o), {
  deep: true,
  immediate: true,
  flush: 'post',
})

onBeforeMount(() => console.log('onBeforeMount'))
onMounted(() => console.log('onMounted'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onUpdated(() => console.log('onUpdated'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onMounted(() => console.log('onUnmounted'))
// watchPostEffect = watch + flush: true

// console.log(count.value.amount)
// console.log(numArr.value[0])
// console.log(numArr2[0])
// console.log(userObj.name)
</script>
<template>
  <h1>{{ count }}</h1>
  <h1>{{ numArr2 }}</h1>
  <h1>{{ doubleCount }}</h1>
  <button @click="increment">+</button>
  <button @click="numArr2.push(4)">+</button>

  <br />
  <p ref="pEl">{{ message }}</p>
  <input type="text" v-model="message" />
</template>
<style scoped></style>
