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
  <div>
    <div v-if="weather === 'sunny'">날씨가 좋네요!</div>
    <div v-else-if="weather === 'rainy'">비가 와요!</div>
    <div v-else-if="weather === 'cloudy'">날씨가 흐려요!</div>
    <div v-else>날씨를 알 수 없어요!</div>
  </div>
</template>
