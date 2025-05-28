<script setup>
import { reactive, provide, onMounted } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const todos = reactive([]);

onMounted(() => {
  const storageTodos = localStorage.getItem("todos");
  if (storageTodos) {
    todos.push(...JSON.parse(storageTodos));
  }
});

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todo) => {
  const newTodo = {
    id: todos.length + 1,
    text: todo,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
};

const removeTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    saveTodos();
  } else {
    alert("Todo not found");
  }
};

const toggleTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
  } else {
    alert("Todo not found");
  }
};

provide("addTodo", addTodo);
provide("removeTodo", removeTodo);
provide("todos", todos);
provide("toggleTodo", toggleTodo);
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor />
    <TodoList :todos="todos" />
  </div>
</template>
<style></style>
