<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  data() {
    return {};
  },
  props: ["itemsArr"],
};
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="(item, index) in itemsArr"
      :key="index"
      :item="item"
      :index="index"
      @delete="$emit('delete', $event)"
    />
  </ul>
</template>
<style></style>
