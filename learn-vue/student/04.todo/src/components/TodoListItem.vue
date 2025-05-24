<script>
export default {
  data() {
    return {}
  },
  props: {
    todoItem: { type: Object, required: true },
  },
  emits: ['deleteTodoItem'],
}
</script>
<template>
  <li class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
    <div class="flex items-center">
      <input
        type="checkbox"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
        v-model="todoItem.done"
      />
      <span :class="{ 'line-through': todoItem.done }">{{ todoItem.todo }}</span>
    </div>
    <button class="text-red-500 hover:text-red-700 ml-4" @click="$emit('deleteTodoItem')">
      Delete
    </button>
  </li>
</template>
