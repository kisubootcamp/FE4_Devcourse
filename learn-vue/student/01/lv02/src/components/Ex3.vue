<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex3',
  data() {
    return {
      role: 'admin', // "admin", "editor", "viewer"
    }
  },
}
</script>
<template>
  <div v-if="role === 'admin'">관지라 메뉴입니다.</div>
  <div v-else-if="role === 'editor'">편집자 메뉴입니다.</div>
  <div v-else-if="role === 'viewer'">읽기전용 메뉴입니다.</div>
</template>
