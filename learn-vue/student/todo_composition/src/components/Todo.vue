<script setup>
import { onMounted, ref, watch } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import { useTodoStore } from "@/stores/todo";

const todoStores = useTodoStore();
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="todoStores.addTodo" />
    <TodoList
      :todos="todoStores.todos"
      @toggle-todo="todoStores.toggleTodo"
      @delete-todo="todoStores.deleteTodo"
    />
  </div>
</template>
<style></style>
