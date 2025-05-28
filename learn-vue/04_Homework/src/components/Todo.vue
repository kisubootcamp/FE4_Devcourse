<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
    components: {
        TodoHeader,
        TodoEditor,
        TodoList,
    },
    data() {
        return {
            todos: [{ id: 1, body: "아침먹기", checked: false }],
            id: 1,
        };
    },
    methods: {
        createTodo(text) {
            if (text !== "") {
                this.todos.push({ id: ++this.id, body: text, checked: false });
            }
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
    },
    watch: {
        todos: {
            handler(newTodos) {
                localStorage.setItem("todos", JSON.stringify(newTodos));
            },
            deep: true,
        },
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem("todos"));
    },
};
</script>
<template>
    <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
        <TodoHeader />
        <TodoEditor @create-todo="createTodo" />
        <TodoList :todos="todos" @delete-todo="deleteTodo" />
    </div>
</template>
<style></style>
