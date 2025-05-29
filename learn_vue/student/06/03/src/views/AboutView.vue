<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const posts = ref([])
const loading = ref(true)
const error = ref(null)
onMounted(async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <h1>about</h1>
  <div v-if="loading">Loading....</div>
  <div v-else-if="error">{{ error }}</div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>
<style scoped></style>
