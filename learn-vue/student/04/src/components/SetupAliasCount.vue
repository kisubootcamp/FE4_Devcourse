<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue'

// ref, reactive
const count = ref({ amount: 0 })
const numArrs = reactive([1, 2, 3])


// computed
const doubleCount = computed(() => count.value * 2)

// methods
const increment = () => (count.value += 1)

// watch
// watch(count, (n, 0) => console.log(n,o))
// watchEffect -> watch + deep: true + immediate: true
// watchPostEffect -> watch + flush:true
watchEffect(() => {
  console.log(count.value)
})
watch(numArrs, (n, o) => console.log(n, o), {
  deep: true,
  immediate: true,
  flush: 'post',
})

const userObj = reactive({ name: 'sucoding' })

console.log(count.value.amount)
console.log(count.value)
</script>
<template>
  <h1>{{ count.amount }}</h1>
</template>
<style scoped></style>
