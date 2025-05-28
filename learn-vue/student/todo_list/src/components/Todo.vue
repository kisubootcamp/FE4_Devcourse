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
  mounted() {
    const storage = sessionStorage.getItem('todo');
    if (storage) {
      this.todos = JSON.parse(storage);
    } else {
      this.todos = [];
    }
  },
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  methods: {
    addTodo(str) {
      this.todos.unshift({
        id: Math.floor(Math.random() * 99999 + 1),
        title: str,
        checked: false,
      });
      console.log(this.todos);
    },
    deleteTodo(deleteId) {
      this.todos = this.todos.filter((todo) => todo.id !== deleteId);
    },
    checkedTodo(checkId) {
      this.todos.map((todo) => {
        if (todo.id === checkId) {
          todo.checked = !todo.checked;
        }
      });
    },
  },
  watch: {
    todos: {
      handler() {
        sessionStorage.setItem('todo', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @addTodo="addTodo" />
    <TodoList :todos @deleteTodo="deleteTodo" @checkedTodo="checkedTodo" />
  </div>
</template>
<style></style>
