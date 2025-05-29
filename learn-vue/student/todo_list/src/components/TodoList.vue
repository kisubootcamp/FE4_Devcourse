<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  data() {
    return {};
  },
  inject: ["task"],
  methods: {
    deleteTask(index) {
      this.task.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(this.task));
    },
    doneTask(index) {
      if (this.task[index].done === false) {
        this.task[index].done = true;
        localStorage.setItem("taskList", JSON.stringify(this.task));
      } else {
        this.task[index].done = false;
        localStorage.setItem("taskList", JSON.stringify(this.task));
      }
    },
  },
};
</script>
<template>
  <ul>
    <TodoListItem
      class="divide-y divide-gray-200"
      v-for="(todo, index) in task"
      :key="todo.id"
      :todo="todo"
      @delete-Task="deleteTask(index)"
      @done-Task="doneTask(index)"
    />
  </ul>
</template>
<style></style>
