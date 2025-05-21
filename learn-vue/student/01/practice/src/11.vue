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
  <!-- code here -->
  <h1 v-if="role === 'admin'">관리자 메뉴</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴</h1>
  <h1 v-else-if="role === 'viewer'">읽기전용 메뉴</h1>
</template>
<style scoped></style>
