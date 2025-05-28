<script>
export default {
    props: {
        todo: {
            type: Object,
        },
    },
    emits: ["deleteTodo"],
};
</script>
<template>
    <li
        class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
    >
        <div class="flex items-center">
            <input
                :id="`checkbox${todo.id}`"
                type="checkbox"
                :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
                v-model="todo.checked"
            />
            <label
                :class="`${todo.checked ? 'line-through' : ''}`"
                :for="`checkbox${todo.id}`"
                >{{ todo.body }}</label
            >
        </div>
        <button
            class="text-red-500 hover:text-red-700 ml-4"
            @click="$emit('deleteTodo', todo.id)"
        >
            Delete
        </button>
    </li>
</template>
