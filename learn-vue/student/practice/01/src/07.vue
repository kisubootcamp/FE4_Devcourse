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
  <!-- code here -->
  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-else>Goodye</h1>
  <h1></h1>
  <h1></h1>
</template>
