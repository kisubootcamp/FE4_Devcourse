<script>
export default {
  data() {
    return {
      isCompleted: false,
    };
  },
  props: ["item", "index"],
};
</script>
<template>
  <li class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
    <div class="flex items-center">
      <input
        type="checkbox"
        v-model="isCompleted"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
      />
      <span :style="{ textDecoration: isCompleted ? 'line-through' : 'none' }">{{ item }}</span>
    </div>
    <button @click="$emit('delete', index)" class="text-red-500 hover:text-red-700 ml-4">
      Delete
    </button>
  </li>
</template>
