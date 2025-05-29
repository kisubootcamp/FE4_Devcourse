import { defineStore } from 'pinia'
import { onMounted, ref, watch } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const addTodo = (text) =>
    todos.value.push({
      id: Math.random(),
      text,
      done: false,
    })
  const deleteTodo = (id) => (todos.value = todos.value.filter((todo) => todo.id !== id))
  watch(todos, () => sessionStorage.setItem('todos', JSON.stringify(todos.value)), {
    deep: true,
  })
  onMounted(() => {
    const data = sessionStorage.getItem('todos')
    if (data) {
      todos.value = JSON.parse(data)
    }
  })
  return {
    todos,
    addTodo,
    deleteTodo,
  }
})
