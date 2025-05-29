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
  methods: {
    deleteTodoItem(id) {
      this.$emit('deleteTodoItem', id)
    },
  },
}
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :todoItem="todoItem"
      @delete-todo-item="deleteTodoItem"
    />
  </ul>
</template>
<style></style>
