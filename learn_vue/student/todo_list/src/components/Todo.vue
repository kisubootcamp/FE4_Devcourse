<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

let id = 0;
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        this.todos.push({ id: id++, text: this.newTodo, done: false });
        this.newTodo = "";
      }
    },
    delTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
    // toggleTodo(todo) {
    //   todo.done = !todo.done;
    // },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" v-model="newTodo" />
    <TodoList @del-todo="delTodo" :todos="todos" />
  </div>
</template>
<style></style>
