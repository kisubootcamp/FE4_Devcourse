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
      todoList: [],
    }
  },
  created() {
    const data = window.sessionStorage.getItem('todo')
    if (data) {
      this.todoList = JSON.parse(data)
    }
  },
  methods: {
    addTodoItem(text) {
      const item = {
        id: Math.random(),
        todo: text,
        done: false,
      }
      this.todoList.push(item)
    },
    deleteTodoItem(id) {
      this.todoList = this.todoList.filter((item) => item.id !== id)
    },
  },
  watch: {
    todoList: {
      handler(newTodo) {
        window.sessionStorage.setItem('todo', JSON.stringify(newTodo))
      },
      deep: true,
    },
  },
}
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo-item="addTodoItem" />
    <TodoList :todoList="todoList" @delete-todo-item="deleteTodoItem" />
  </div>
</template>
<style></style>
