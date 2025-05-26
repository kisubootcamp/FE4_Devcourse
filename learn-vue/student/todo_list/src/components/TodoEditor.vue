<script>
export default {
  name: "TodoEditor",
  data() {
    return {
      text: "",
    };
  },
  props: ["addTodo"],
  emits: ["addTodo"],
  methods: {
    handleSubmit() {
      this.$emit("addTodo", this.text);
      this.text = "";
    },
  },
};
</script>
<template>
  <!-- 엔터키 반응을 위해 form태그로 변환하고 submit.prevent -->
  <form class="flex p-4" @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="addTodo"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>
