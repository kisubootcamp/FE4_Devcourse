<script setup>
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import { reactive, provide, onMounted } from 'vue'

const messages = reactive([])

onMounted(() => {
  const storedMessages = sessionStorage.getItem('messages')
  if (storedMessages) {
    const parsed = JSON.parse(storedMessages)
    messages.splice(0, messages.length, ...parsed)
  }
})

const addItem = (text) => {
  messages.push({ id: Date.now(), text })
  sessionStorage.setItem('messages', JSON.stringify(messages))
}

const deleteItem = (id) => {
  const index = messages.findIndex((item) => item.id === id)
  if (index !== -1) {
    messages.splice(index, 1)
  }
  sessionStorage.setItem('messages', JSON.stringify(messages))
}

provide('messages', messages)
provide('addItem', addItem)
provide('deleteItem', deleteItem)
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor />
    <TodoList />
  </div>
</template>
<style></style>
