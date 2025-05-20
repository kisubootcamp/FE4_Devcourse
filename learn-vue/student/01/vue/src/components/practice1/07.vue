<script>
export default {
  name: 'App',
  data() {
    return {
      isGreeting: true,
    }
  },
}
</script>
<template>
  <div>
    <h1 v-if="isGreeting">안녕하세요!</h1>
    <h1 v-else>안녕히 가세요!</h1>
  </div>
</template>
