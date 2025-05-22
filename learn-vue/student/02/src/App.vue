<!--Counter-->
<script>
export default {
  name: 'App',
  data() {
    return { num: 0 }
  },
}
</script>
<template>
  <h1>{{ num }}</h1>
  <button>감소</button>
  <button>증가</button>
</template>
<style scoped></style>
