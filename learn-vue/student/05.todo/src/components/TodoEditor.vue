<script setup>
import { ref } from 'vue'

const todoText = ref('')
const emit = defineEmits(['addTodoItem'])
const handleSubmit = () => {
  emit('addTodoItem', todoText.value)
  todoText.value = ''
}
</script>
<template>
  <form class="flex p-4" @submit.prevent="handleSubmit">
    <input
      v-model="todoText"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      type="submit"
    >
      Add Todo
    </button>
  </form>
</template>
<style scoped></style>
