<template>
  <div>
    <h1 class="text-2xl font-bold">{{ count }}</h1>
    <button @click="increment" class="bg-blue-500 text-white p-2 rounded-md">+</button>
    <button @click="reset" class="bg-red-500 text-white p-2 rounded-md">Reset</button>
    <button @click="decrement" class="bg-green-500 text-white p-2 rounded-md">-</button>
    <h1 class="text-2xl font-bold">{{ doubleCount }}</h1>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
const reset = () => {
  count.value = 0
}

const obj = reactive({
  name: 'John',
  age: 20,
})
console.log(obj.name)

// computed
const doubleCount = computed(() => count.value * 2)

// watch
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>

<style lang="scss" scoped></style>
