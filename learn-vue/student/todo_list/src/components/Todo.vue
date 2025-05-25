<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "Todo",

  data() {
    return {
      inputText: "",
      itemsArr: [],
    };
  },
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  methods: {
    addClickHandler() {
      if (this.inputText === "") return;
      this.itemsArr.push(this.inputText);
      this.inputText = "";
    },
    deleteClickHandler(index) {
      this.itemsArr.splice(index, 1);
    },
  },
};
</script>
<template>
  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor
      :inputText="inputText"
      @input="(e) => (inputText = e.target.value)"
      :addClickHandler="addClickHandler"
    />
    <TodoList :itemsArr="itemsArr" @delete="deleteClickHandler" />
  </div>
</template>
<style></style>
