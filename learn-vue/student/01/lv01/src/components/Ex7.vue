<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex7',
  data() {
    return {
      isGreeting: true,
    }
  },
}
</script>
<template>
  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-else>GoodBye</h1>
</template>
