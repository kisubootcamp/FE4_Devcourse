<script>
import TodoEditor from './TodoEditor.vue';
import TodoHeader from './TodoHeader.vue';
import TodoList from './TodoList.vue';

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  methods: {
    addTodo(work) {
      this.todos.push({ todo: work, done: false, id: Date.now() });
      console.log(this.todos);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      console.log(this.todos);
    },
    doneTodo(id) {
      const selectedTodo = this.todos.find((todo) => todo.id === id);
      selectedTodo.done = !selectedTodo.done;
      console.log(this.todos);
    },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @send-todo="addTodo" />
    <TodoList :todos="todos" @done-todo="doneTodo" @delete-todo="deleteTodo" />
  </div>
</template>
<style></style>
