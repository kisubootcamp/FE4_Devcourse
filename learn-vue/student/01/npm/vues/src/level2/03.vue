<script>
export default {
  name: "03",
  data() {
    return {
      role: "admin",
    };
  },
};
</script>
<template>
  <div v-if="role === 'admin'">관리자 메뉴 표시</div>
  <div v-else-if="role === 'editor'">편집자 메뉴 표시</div>
  <div v-else-if="role === 'viewer'">읽기 전용 메뉴 표시</div>
  <div>사용자 권한</div>
</template>
<style scoped></style>
