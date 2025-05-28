<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  mounted() {
    this.$refs.todoInput.focus();
  },
  methods: {
    handleChange(e) {
      this.text = e.target.value;
    },
    sendTodo() {
      const todoText = this.text.trim();
      if (todoText === '') {
        alert('할 일을 입력해주세요');
        this.text = '';
        this.$refs.todoInput.focus();
        return;
      }
      this.$emit('send-todo', todoText);
      this.text = '';
      this.$refs.todoInput.focus();
    },
  },
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      ref="todoInput"
      placeholder="Enter a new todo"
      :value="text"
      @input="handleChange"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button @click="sendTodo" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
      Add Todo
    </button>
  </div>
</template>
<style></style>
