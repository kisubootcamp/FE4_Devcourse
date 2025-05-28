<script>
let id = 0;
export default {
  data() {
    return {};
  },
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ["add-todo", "update:modelValue"],
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="$emit('add-todo')"
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
