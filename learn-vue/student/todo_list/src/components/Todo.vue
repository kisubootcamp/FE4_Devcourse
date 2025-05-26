<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "Todo",
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
  // 변경사항을 sessionStorage에 저장해두고 새로고침을 해도 값을 가져오게 함
  mounted() {
    const saved = sessionStorage.getItem("todos");
    if (saved) {
      // 문자열로 저장해두었던 값이기 때문에 parse
      this.todos = JSON.parse(saved);
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false,
      });
    },
    toggleTodo(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  // 변경사항을 감지하고 새로고침 했을 때에도 저장이 되게함
  watch: {
    todos: {
      deep: true,
      handler(newTodos) {
        // storage는 반드시 문자열로 저장해야 한다.
        sessionStorage.setItem("todos", JSON.stringify(newTodos));
      },
    },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" @toggle-todo="toggleTodo" />
  </div>
</template>
<style></style>
