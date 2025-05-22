<!--컴포넌트-->
<script>
import FirstChild2 from './components/FirstChild2.vue'

export default {
  name: 'App-3',
  components: {
    FirstChild2,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>App Vue</h1>
  <FirstChild2 />
</template>
<style scoped></style>
