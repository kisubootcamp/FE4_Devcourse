<script>
export default {
  name: 'FirstChild',
  data() {
    return {
      isLoggedin: true,
    }
  },
}
</script>
<template>
  <h1 :class="{ isLoggedin }" :style="{ color: 'red' }">first child</h1>
</template>
<style scoped>
.isLoggedin {
  font-size: 50px;
}
</style>
