<script setup>
import { inject } from "vue";

const todos = inject("todos");
const removeTodo = inject("removeTodo");
const toggleTodo = inject("toggleTodo");
</script>
<template>
  <li
    class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
    v-for="todo in todos"
    :key="todo.id"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
        :checked="todo.completed"
        @change="toggleTodo(todo.id)"
      />
      <span :class="`${todo.completed ? 'line-through' : ''}`">{{
        todo.text
      }}</span>
    </div>
    <button
      class="text-red-500 hover:text-red-700 ml-4"
      @click="removeTodo(todo.id)"
    >
      Delete
    </button>
  </li>
</template>
