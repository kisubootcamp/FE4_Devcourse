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
    todoListData: {
      type: Array,
    },
  },
  methods: {
    todoDelete(todoId) {
      this.$emit('todoDelete', todoId);
    },
  },
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem :todo-list-data="todoListData" @todo-delete="todoDelete" />
  </ul>
</template>
<style></style>
