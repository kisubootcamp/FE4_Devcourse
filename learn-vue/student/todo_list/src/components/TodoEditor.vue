<script setup>
import { inject, ref } from "vue";

const addTodo = inject("addTodo");
const newTodo = ref("");
const isComposing = ref(false);

const handleAddTodo = () => {
  if (newTodo.value.trim() === "") {
    alert("Please enter a todo");
    return;
  }

  addTodo(newTodo.value);
  newTodo.value = "";
};

const handleKeyDown = (e) => {
  if (e.key === "Enter" && !isComposing.value) {
    e.preventDefault();
    handleAddTodo();
  }
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      v-model="newTodo"
      @compositionstart="isComposing = true"
      @compositionend="isComposing = false"
      @keydown="handleKeyDown"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="handleAddTodo"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
