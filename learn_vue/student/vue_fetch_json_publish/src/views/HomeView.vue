<script setup>
import { fetchPosts } from '@/api'
import { computed, onMounted, ref, watch } from 'vue'
import PostCard from '../components/PostCard.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const posts = ref([])
const loading = ref(true)
const error = ref(null)

const searchQuery = computed(() => (route.query.search ? route.query.search : ''))

const filteredPosts = computed(() => {
  if (!searchQuery.value) return posts.value
  const query = searchQuery.value.toLowerCase()
  return posts.value.filter(
    (post) => post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query),
  )
})

const loadPosts = async () => {
  loading.value = true
  error.value = null
  try {
    posts.value = await fetchPosts()
  } catch (err) {
    error.value = 'error'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadPosts()
})

watch(
  () => route.query.search,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)
</script>

<template>
  <div class="home-view">
    <div class="container">
      <!-- 검색 후 결과 노출 영역 -->
      <div v-if="searchQuery" class="search-results mb-3">
        <h2>Search results for: {{ searchQuery }}</h2>
        <!-- 검색된 데이터가 없을 때 -->
        <p v-if="!loading && filteredPosts.length === 0">
          No posts found for your search. Try a different query.
        </p>
        <!-- 데이터를 찾았을 때 -->
        <p v-else-if="!loading">{{ filteredPosts.length }}</p>
      </div>

      <div v-if="loading" class="loading-container">
        <LoadingSpinner size="large" />
        <p>Loading posts...</p>
      </div>

      <div v-else-if="error" class="error-container">
        <ErrorMessage :message="error" :retry="loadPosts" />
      </div>

      <div v-else class="posts-grid">
        <div v-for="post in filteredPosts" :key="post.id" class="post-item">
          <PostCard :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: var(--space-3) 0;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.loading-container p {
  margin-top: var(--space-2);
  color: var(--color-text-secondary);
}

.error-container {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-results {
  padding: var(--space-2);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.search-results h2 {
  margin-top: 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2);
}

@media (min-width: 640px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .posts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (prefers-color-scheme: dark) {
  .search-results {
    background-color: var(--color-surface-dark);
  }
}
</style>
