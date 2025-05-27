<script setup>
import { useTodoStore } from '@/stores/todo'
import TodoListItem from './TodoListItem.vue'
const todoStore = useTodoStore()
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem v-for="todoItem in todoStore.todos" :key="todoItem.id" :todoItem="todoItem" />
  </ul>
</template>
<style scoped></style>
