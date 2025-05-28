<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
    },
    emits: ["del-todo"],
  },
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @del-todo="$emit('del-todo', $event)"
    />
  </ul>
</template>
<style></style>
