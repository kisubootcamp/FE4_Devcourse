<script setup>
import SecondChilde from './SecondChilde.vue'

const props = defineProps({
  name: String,
  age: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits(['increment'])
</script>
<template>
  <h1>FirstChild</h1>
  <h1>{{ props.name }}, {{ props.age }}</h1>
  <button @click="emit('increment')">뭐먹을꺼바로우</button>
  <SecondChilde />
</template>
<style scoped></style>
