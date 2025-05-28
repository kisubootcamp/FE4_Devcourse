<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todos: {
    type: Array,
  },
});

const emit = defineEmits("deleteTodo", "toggleTodo");
const toggleTodo = (id) => emit("toggleTodo", id);
const deleteTodo = (id) => emit("deleteTodo", id);
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </ul>
</template>
<style></style>
