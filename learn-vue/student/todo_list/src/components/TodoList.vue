<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emit: ["toggleTodo", "deleteTodo"],
  methods: {
    toggleTodo(id) {
      this.$emit("toggleTodo", id);
    },
    deleteTodo(id) {
      thie.$emit("deleteTodo", id);
    },
  },
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="$emit('delete', todo.id)"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo" />
  </ul>
</template>
<style></style>
