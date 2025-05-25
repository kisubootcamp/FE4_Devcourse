<script>
import TodoListItem from './TodoListItem.vue';

export default {
  components: {
    TodoListItem,
  },
  data() {
    return {};
  },
  props: {
    todos: {
      type: Array,
    },
  },
  methods: {
    doneTodo(id) {
      this.$emit('done-todo', id);
    },
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
  },
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @done-todo="doneTodo" @delete-todo="deleteTodo" />
  </ul>
</template>
<style></style>
