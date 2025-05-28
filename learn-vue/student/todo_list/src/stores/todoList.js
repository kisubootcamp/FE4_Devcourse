import { defineStore } from "pinia";
import { reactive, onMounted } from "vue";

export const useTodoListStore = defineStore("todoList", () => {
  const todos = reactive([]);

  onMounted(() => {
    const storageTodos = localStorage.getItem("todos");
    if (storageTodos) {
      todos.push(...JSON.parse(storageTodos));
    }
  });

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      text: todo,
      completed: false,
    };

    todos.push(newTodo);
    saveTodos();
  };

  const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      saveTodos();
    } else {
      alert("Todo not found");
    }
  };

  const toggleTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
      saveTodos();
    } else {
      alert("Todo not found");
    }
  };

  return { todos, addTodo, removeTodo, toggleTodo };
});
