<script setup>
import { useTodoStore } from '@/stores/todo'
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor />
    <TodoList />
  </div>
</template>
<style scoped></style>
