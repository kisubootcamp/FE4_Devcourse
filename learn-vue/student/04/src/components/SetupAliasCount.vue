<script setup>
import { computed, onBeforeMount, reactive, ref, watch, watchEffect } from 'vue'

const count = ref(1)
console.log(count.value)

const userObj = reactive({ name: 'sucoding' })
console.log(userObj.name)

const doubleCount = computed(() => count.value * 2)

const increment = () => (count.value += 1)

watch(count, (n, o) => console.log(n, o))
watchEffect(() => {
  console.log(count.value)
})

onBeforeMount(() => console.log('onBeforeMount'))
</script>
<template>
  <h1>{{ count }}</h1>
  <h1>{{ userObj }}</h1>
  <h1>{{ doubleCount }}</h1>
  <button @click="increment">increment</button>
</template>
<style scoped></style>
