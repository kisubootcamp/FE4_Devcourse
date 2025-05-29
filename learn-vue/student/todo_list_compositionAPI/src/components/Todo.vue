<script setup>
import { onMounted, ref, watch } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const todos = ref([]);

onMounted(() => {
  const data = localStorage.getItem("vue_todo");
  if (data) {
    todos.value = JSON.parse(data);
  }
});

const addTodo = (text) =>
  todos.value.push({ id: Date.now(), text, done: false });
const toggleTodo = (id) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
};
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

//watch 작성
watch(
  todos,
  (newTodos) => {
    sessionStorage.setItem("vue_todo", JSON.stringify("newTodos"));
  },
  {
    deep: true,
  }
);
</script>
<template>
  <TodoHeader />
  <TodoEditor @add-todo="addTodo" />
  <TodoList
    :todos="todos"
    @toggle-todo="toggleTodo"
    @delete-todo="deleteTodo" />
</template>
<style scoped></style>

<!-- <script>
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
<style></style> -->
