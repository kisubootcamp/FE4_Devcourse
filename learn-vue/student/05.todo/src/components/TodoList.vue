<script setup>
import TodoListItem from './TodoListItem.vue'

const props = defineProps({
  todoList: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['deleteTodoItem'])
const deleteTodoItem = (id) => emit('deleteTodoItem', id)
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todoItem in props.todoList"
      :key="todoItem.id"
      :todoItem="todoItem"
      @delete-todo-item="deleteTodoItem"
    />
  </ul>
</template>
<style scoped></style>
