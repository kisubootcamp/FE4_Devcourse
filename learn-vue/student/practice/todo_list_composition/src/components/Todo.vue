<script setup>
import { ref, watch, onMounted } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const todos = ref([]);
const addTodo = (text) => {
  if (text.value === null) return;
  todos.value.push({
    id: Date.now(),
    text,
    done: false,
  });
};

const toggleTodo = (id) => {
  todos.value = todos.value.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
};
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
onMounted(() => {
  const saved = sessionStorage.getItem("todos");
  if (saved) {
    todos.value = JSON.parse(saved);
  }
});
watch(
  todos,
  (newTodos) => {
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
  },
  {
    deep: true,
  }
);
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" @toggle-todo="toggleTodo" />
  </div>
</template>
<style></style>
