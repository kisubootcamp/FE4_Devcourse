<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import CommentList from '@/components/CommentList.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { fetchPostById, fetchUser } from '@/api'

const router = useRouter()
const route = useRoute()
const postId = computed(() => Number(route.params.id))
const post = ref(null)
const loading = ref(true)
const error = ref(null)
const user = ref(null)

const loadPost = async () => {
  loading.value = true
  error.value = null
  try {
    const data = await fetchPostById(postId.value)
    post.value = data
    user.value = await fetchUser(data.userId)
  } catch (err) {
    error.value = 'Failed to load post. Please try again later.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await loadPost()
})
</script>

<template>
  <div class="post-detail-view">
    <div class="container">
      <button class="back-button" @click="router.back()">← Back</button>

      <!-- 로딩 -->
      <div class="loading-container" v-if="loading">
        <LoadingSpinner size="large" />
        <p>Loading post details...</p>
      </div>

      <!-- 에러 -->
      <div class="error-container" v-else-if="error">
        <ErrorMessage />
      </div>

      <div class="post-detail" v-else-if="post">
        <div class="post-header">
          <h1>{{ post.title }}</h1>

          <div class="user-info" v-if="user">
            <div class="user-avatar">{{ user.name.charAt(0) }}</div>
            <div class="user-details">
              <span class="user-name">{{ user.name }}</span>
              <span class="user-company">{{ user.company.name }}</span>
              <a :href="`mailto:${user.email}`" class="user-email">{{ user.email }}</a>
            </div>
          </div>
        </div>

        <div class="post-content">
          <p>{{ post.body }}</p>
        </div>

        <CommentList :postId="postId" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-detail-view {
  padding: var(--space-3) 0;
}

.back-button {
  background: none;
  border: none;
  color: var(--color-primary);
  font-weight: 500;
  cursor: pointer;
  padding: var(--space-1) 0;
  margin-bottom: var(--space-2);
  display: inline-flex;
  align-items: center;
  transition: transform var(--transition-fast);
}

.back-button:hover {
  transform: translateX(-4px);
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

.post-detail {
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.post-header {
  padding: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

.post-header h1 {
  margin-top: 0;
  margin-bottom: var(--space-2);
  font-size: 1.8rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.user-company {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.user-email {
  color: var(--color-primary);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.post-content {
  padding: var(--space-3);
  line-height: 1.8;
  font-size: 1.1rem;
}

.post-content p {
  margin-top: 0;
}

@media (prefers-color-scheme: dark) {
  .post-detail {
    background-color: var(--color-surface-dark);
  }

  .post-header {
    border-bottom-color: var(--color-border-dark);
  }
}
</style>
