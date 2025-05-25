<script>
export default {
  data() {
    return {};
  },
  props: {
    todoListData: {
      type: Array,
    },
  },
  methods: {
    saveData() {
      sessionStorage.setItem('todoData', JSON.stringify(this.todoListData));
    },
  },
};
</script>
<template>
  <li
    class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
    v-for="todo in todoListData"
    :key="todo.id"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
        v-model="todo.isDone"
        @change="saveData"
      />
      <span v-if="todo.isDone" class="line-through">
        {{ todo.content }}
      </span>
      <span v-else>{{ todo.content }}</span>
    </div>
    <button
      class="text-red-500 hover:text-red-700 ml-4"
      @click="$emit('todoDelete', todo.id)"
    >
      Delete
    </button>
  </li>
</template>
