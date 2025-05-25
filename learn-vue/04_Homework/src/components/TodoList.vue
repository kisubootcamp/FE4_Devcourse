<script>
import TodoListItem from "./TodoListItem.vue";

export default {
    components: {
        TodoListItem,
    },
    data() {
        return {};
    },
    props: {
        todos: {
            type: Array,
        },
    },
    emits: ["deleteTodo"],
};
</script>
<template>
    <ul class="divide-y divide-gray-200">
        <TodoListItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @deleteTodo="$emit('deleteTodo', todo.id)"
        />
    </ul>
</template>
<style></style>
