<script>
export default {
  data() {
    return {
      todoInput: '',
      todoId: 0,
    };
  },
  methods: {
    todoInputHandler() {
      if (this.todoInput === '') return;
      this.todoId = Date.now();
      this.$emit('inputTransfer', this.todoInput, this.todoId);
      this.todoInput = '';
    },
  },
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :value="todoInput"
      @input="(e) => (todoInput = e.target.value)"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="todoInputHandler"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
