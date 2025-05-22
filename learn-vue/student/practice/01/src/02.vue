<script>
export default {
  name: 'App',
  data() {
    return {
      weather: 'sunny', // rainy, cloudy
    }
  },
}
</script>
<template>
  <!-- code here -->
  <h1 v-if="weather === 'sunny'">맑습니다</h1>
  <h1 v-else-if="weather === 'rainy'">비가옵니다</h1>
  <h1 v-else>흐립니다</h1>
</template>
