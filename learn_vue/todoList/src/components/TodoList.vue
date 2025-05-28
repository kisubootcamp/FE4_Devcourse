<script setup>
import TodoListItem from './TodoListItem.vue'
import { inject } from 'vue'

const messages = inject('messages')
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem
      v-for="message in messages"
      :key="message.id"
      :id="message.id"
      :message="message.text"
    />
  </ul>
</template>
<style></style>
