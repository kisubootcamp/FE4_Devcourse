<script>
export default {
  data() {
    return {
      taskText: "",
    };
  },
  inject: ["task"],
  methods: {
    addTask() {
      if (this.taskText === "") {
        alert("할 일을 입력해 주세요");
      } else {
        if (this.task.length > 0) {
          this.task.push({
            id: this.task[this.task.length - 1].id + 1,
            title: this.taskText,
            done: false,
          });
          this.taskText = "";
        } else {
          this.task.push({
            id: 0,
            title: this.taskText,
            done: false,
          });
          this.taskText = "";
        }
      }
      localStorage.setItem("taskList", JSON.stringify(this.task));
      JSON.parse(localStorage.getItem("taskList"));
    },
  },
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      v-model="taskText"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="addTask"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
