<script setup>
import { onMounted, ref } from 'vue'

// api 렌더링
const posts = ref([])
const loading = ref(true)
const error = ref(null)

// 뷰에서는 api호출을 onMounted에서 함
onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) throw new Error('error')
    const data = await res.json()
    posts.value = data
    loading.value = false
  } catch (e) {
    console.error(e)
    error.value = e
  }
})
</script>
<template>
  <h1>Home</h1>
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
