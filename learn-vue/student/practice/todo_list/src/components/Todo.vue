<script>
import TodoEditor from './TodoEditor.vue';
import TodoHeader from './TodoHeader.vue';
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  data() {
    return {
      todoListData: [],
    };
  },
  created() {
    if (sessionStorage.getItem('todoData') !== null) {
      this.todoListData = JSON.parse(sessionStorage.getItem('todoData'));
    }
  },
  methods: {
    todoListEvent(todoInput, todoId) {
      const todoData = {
        id: todoId,
        content: todoInput,
        isDone: false,
      };
      this.todoListData.push(todoData);
      sessionStorage.setItem('todoData', JSON.stringify(this.todoListData));
    },
    todoDelete(todoId) {
      this.todoListData = this.todoListData.filter(
        (todo) => todo.id !== todoId
      );
      sessionStorage.setItem('todoData', JSON.stringify(this.todoListData));
    },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @input-transfer="todoListEvent" />
    <TodoList :todo-list-data="todoListData" @todo-delete="todoDelete" />
  </div>
</template>
<style>
body {
  font-family: sans-serif;
  font-weight: 500;
}
</style>
