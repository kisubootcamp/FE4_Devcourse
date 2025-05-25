<script>
export default {
  data() {
    return {};
  },
  props: {
    todo: {
      type: Object,
    },
  },
  emits: ["del-todo"],
};
</script>
<template>
  <li
    class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div class="flex items-center">
      <input
        v-model="todo.done"
        type="checkbox"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
      />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </div>
    <button
      @click="$emit('del-todo', todo)"
      class="text-red-500 hover:text-red-700 ml-4"
    >
      Delete
    </button>
  </li>
</template>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
