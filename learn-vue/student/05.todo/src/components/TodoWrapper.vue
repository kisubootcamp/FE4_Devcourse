<script setup>
import { onMounted, ref, watch } from 'vue'
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

let todoList = ref([])

const addTodoItem = (text) => {
  todoList.value.push({
    id: Math.random(),
    todo: text,
    done: false,
  })
}

const deleteTodoItem = (id) => {
  todoList.value = todoList.value.filter((item) => item.id !== id)
}

onMounted(() => {
  const data = sessionStorage.getItem('todo')
  if (data) {
    todoList.value = JSON.parse(data)
  }
})

watch(
  todoList,
  (newTodos) => {
    sessionStorage.setItem('todo', JSON.stringify(newTodos))
  },
  {
    deep: true,
  }
)
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo-item="addTodoItem" />
    <TodoList :todoList="todoList" @delete-todo-item="deleteTodoItem" />
  </div>
</template>
<style scoped></style>
