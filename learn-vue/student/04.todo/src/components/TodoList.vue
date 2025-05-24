<script>
import TodoListItem from './TodoListItem.vue'

export default {
  components: {
    TodoListItem,
  },
  data() {
    return {}
  },
  props: {
    todoList: Array,
  },
  emits: ['deleteTodoItem'],
}
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <template v-for="todoItem in todoList" :key="todoItem.id">
      <TodoListItem :todoItem="todoItem" @deleteTodoItem="$emit('deleteTodoItem', todoItem.id)" />
    </template>
  </ul>
</template>
<style></style>
