<script>
export default {
  data() {
    return {
      message: 'Hello, Vue JS!',
      messageHTML: '<h1>Hello, Vue JS(with h1)</h1>',
    }
  },
}
</script>

<template>
  <div v-html="messageHTML"></div>
</template>
