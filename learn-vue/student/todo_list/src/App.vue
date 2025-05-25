<script>
import Todo from "./components/Todo.vue";

export default {
  components: {
    Todo,
  },
  data() {
    return {
      taskList: JSON.parse(localStorage.getItem("taskList")) || [],
    };
  },
  computed: {
    data() {},
  },
  provide() {
    if (this.taskList === 0) {
      return {
        task: this.todos,
      };
    } else {
      return {
        task: this.taskList,
      };
    }
  },
};
</script>
<template>
  <Todo />
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>
