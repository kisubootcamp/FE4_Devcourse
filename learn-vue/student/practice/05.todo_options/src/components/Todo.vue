<script>
import TodoEditor from './TodoEditor.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  data() {
    return {
      todos: [], // const [doto, setTodo] = useState<T>([]);
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false,
      })
    },
    toggleTodo(id) {
      this.todos = this.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
  },
  mounted() {
    const saved = sessionStorage.getItem('todos')
    if (saved) {
      this.todos = JSON.parse(saved)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newTodos) {
        sessionStorage.setItem('todos', JSON.stringify(newTodos))
      },
    },
  },
}
</script>
<template>
  <div class="max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo" />
    <TodoList :todos="todos" @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
  </div>
</template>
<style></style>
