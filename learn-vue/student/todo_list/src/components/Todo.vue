<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    const data = localStorage.getItem("todos");
    if (data) {
      try {
        this.todos = JSON.parse(data);
      } catch (e) {
        console.error("Parsing Error", e);
      }
    }
  },
  methods: {
    addTodo(text) {
      if (!text) return;
      const newTodo = {
        id: Date.now(),
        text,
        done: false,
      };
      this.todos.push(newTodo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(id) {
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
  },

  watch: {
    todos: {
      handler(newTodo) {
        localStorage.setItem("todos", JSON.stringify(newTodo));
      },
      deep: true,
    },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @delete-todo="deleteTodo"
      @toggl-todo="toggleTodo" />
  </div>
</template>
<style></style>
