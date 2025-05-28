<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const posts = ref([])
const loading = ref(true)
// vue app call point
onMounted(async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = res.data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style lang="scss" scoped></style>
