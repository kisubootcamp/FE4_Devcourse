<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ref, onMounted } from 'vue'
import { fetchCommentsByPostId } from '@/api'
const { postId } = defineProps({
  postId: String,
})

const comments = ref([])
const loading = ref(true)
const error = ref(null)

const loadComments = async () => {
  loading.value = true
  error.value = null
  try {
    const data = await fetchCommentsByPostId(postId)
    comments.value = data
  } catch (err) {
    error.value = 'Failed to load comments. Please try again later.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await loadComments()
})
</script>

<template>
  <div class="comments-section">
    <h3>
      Comments
      <span v-if="!loading && !error">({{ comments.length }})</span>
    </h3>

    <!-- 로딩 -->
    <div class="comments-loading" v-if="loading">
      <LoadingSpinner />
    </div>

    <!-- 에러 -->
    <div class="comments-error" v-else-if="error">
      <p>에러 발생</p>
      <button class="btn btn-secondary">Try again</button>
    </div>

    <!-- 댓글 없음 -->
    <div class="no-comments" v-else-if="!loading && comments.length === 0">
      <p>No comments found for this post.</p>
    </div>

    <div class="comments-list" v-else>
      <div class="comment-card" v-for="comment in comments" :key="comment.id">
        <div class="comment-header">
          <h4 class="comment-name">{{ comment.name }}</h4>
          <span class="comment-email">{{ comment.email }}</span>
        </div>
        <p class="comment-body">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  margin-top: var(--space-4);
}

.comments-section h3 {
  padding-left: 1rem;
}

.comments-loading {
  display: flex;
  justify-content: center;
  padding: var(--space-3);
}

.comments-error {
  background-color: rgba(255, 69, 58, 0.1);
  border: 1px solid var(--color-error);
  border-radius: var(--radius-md);
  padding: var(--space-2);
  text-align: center;
}

.no-comments {
  padding: var(--space-2);
  text-align: center;
  color: var(--color-text-secondary);
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.comment-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-2);
  transition: transform 0.2s ease;
}

.comment-card:hover {
  transform: translateY(-2px);
}

.comment-header {
  margin-bottom: var(--space-1);
}

.comment-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.comment-email {
  display: block;
  color: var(--color-text-tertiary);
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.comment-body {
  margin: 0;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

@media (prefers-color-scheme: dark) {
  .comments-error {
    background-color: rgba(255, 69, 58, 0.2);
  }

  .comment-card {
    background-color: var(--color-surface-dark);
    border-color: var(--color-border-dark);
  }
}
</style>
