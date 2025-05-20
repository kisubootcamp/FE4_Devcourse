<script>
export default {
  name: 'App',
  data() {
    return {
      role: 'admin', // "admin", "editor", "viewer"
    }
  },
}
</script>
<template>
  <div v-if="role === 'admin'">관리자 페이지</div>
  <div v-else-if="role === 'editor'">편집자 페이지</div>
  <div v-else-if="role === 'viewer'">뷰어 페이지</div>
</template>
<style scoped></style>
