<template>
  <div>Data Fetch</div>
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

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: [],
      error: null,
      loading: true,
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      next((vm) => {
        vm.posts = res.data
        vm.loading = false
      })
    } catch (error) {
      console.log(error)
      next((vm) => (vm.error = error))
    }
  },
}
</script>

<style lang="scss" scoped></style>
