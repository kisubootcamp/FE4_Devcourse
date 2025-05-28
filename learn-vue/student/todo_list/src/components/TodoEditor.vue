<script>
export default {
  emits: ['addTodo'],
  methods: {
    clickHandler() {
      if (this.$refs.input.value !== '') {
        this.$emit('addTodo', this.$refs.input.value);
        this.$refs.input.value = '';
        this.$refs.input.focus();
      } else {
        alert('할일을 작성해주세요');
      }
    },
    enterHandler(event) {
      if (event.keyCode === 13) {
        this.clickHandler();
      }
    },
  },
};
</script>
<template>
  <div class="flex p-4">
    <input
      @keydown="enterHandler($event)"
      ref="input"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="clickHandler"
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
