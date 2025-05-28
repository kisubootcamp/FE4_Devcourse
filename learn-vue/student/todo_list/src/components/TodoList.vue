<script>
import TodoListItem from './TodoListItem.vue';

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
    },
  },
  emits: ['deleteTodo', 'checkedTodo'],
  data() {
    return {};
  },
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="(todo, index) in todos"
      :todo="todo"
      :key="index"
      @deleteTodo="$emit('deleteTodo', todo.id)"
      @checkedTodo="$emit('checkedTodo', todo.id)"
    />
  </ul>
</template>
<style></style>
