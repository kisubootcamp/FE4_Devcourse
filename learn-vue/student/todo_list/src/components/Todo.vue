<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-Task="$emit('addTask')" />
    <TodoList @delete-Task="$emit('deleteTask')" />
  </div>
</template>
<style></style>
