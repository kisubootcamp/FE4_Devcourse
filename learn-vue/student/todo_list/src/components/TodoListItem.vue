<script>
export default {
  data() {
    return {};
  },
  props: {
    todo: Object,
  },
};
</script>
<template>
  <li class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
    <div class="flex items-center">
      <input
        type="checkbox"
        @change="$emit('done-todo', todo.id)"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
      />
      <span :class="{ 'line-through': todo.done }">{{ todo.todo }}</span>
    </div>
    <button @click="$emit('delete-todo', todo.id)" class="text-red-500 hover:text-red-700 ml-4">Delete</button>
  </li>
</template>
