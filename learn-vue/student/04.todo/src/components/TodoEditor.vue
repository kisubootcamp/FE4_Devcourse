<script>
export default {
  emits: ['addTodoItem'],
  data() {
    return {
      todoText: '',
    }
  },
  methods: {
    changeHandler() {
      if (this.todoText && this.todoText.trim().length !== 0) {
        this.$emit('addTodoItem', this.todoText)
        this.todoText = ''
      }
    },
  },
}
</script>
<template>
  <form class="flex p-4" @submit.prevent="changeHandler">
    <input
      v-model="todoText"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      type="submit"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>
