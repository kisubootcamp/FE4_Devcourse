<script>
export default {
  name: "TodoEditor",
  props: ["inputText", "addClickHandler"],
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      :value="inputText"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="addClickHandler"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
