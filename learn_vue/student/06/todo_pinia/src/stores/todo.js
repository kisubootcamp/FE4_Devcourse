import { defineStore } from "pinia";
import { reactive, watch, onMounted } from "vue";

export const useTodoStore = defineStore("todos", () => {
  const todos = reactive([]);

  onMounted(() => {
    const saved = sessionStorage.getItem("todos");
    if (saved) {
      const parsed = JSON.parse(saved);
      parsed.forEach((todo) => todos.push(todo));
    }
  });

  watch(
    todos,
    (newTodos) => {
      sessionStorage.setItem("todos", JSON.stringify(newTodos));
    },
    { deep: true }
  );

  const addTodo = (text) => {
    todos.push({
      id: Date.now(),
      text,
      done: false,
    });
  };
  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  };
  const deleteTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
});
