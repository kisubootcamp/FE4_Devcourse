<script setup>
import { useTemplateRef, inject } from 'vue'

const input = useTemplateRef('input')
const addItem = inject('addItem')

const valueSubmit = () => {
  const value = input.value.value
  if (value === '') return
  addItem(value)
  input.value.value = ''
}
</script>
<template>
  <div class="flex p-4">
    <input
      ref="input"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="valueSubmit"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
