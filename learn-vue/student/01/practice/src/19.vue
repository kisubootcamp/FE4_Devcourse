<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Save', 'Cancel', 'Delete'],
    }
  },
}
</script>
<template>
  <!-- code here -->
  <button v-for="text in items" :key="text">{{ text }}</button>
</template>
