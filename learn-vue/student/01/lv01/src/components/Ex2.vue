<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex2',
  data() {
    return {
      true: true,
      weather: 'sunny', // rainy, cloudy
    }
  },
}
</script>
<template>
  <h1 v-if="weather === 'sunny'">화창한 날씨!</h1>
  <h1 v-else-if="weather === 'rainy'">비가 옵니다.</h1>
  <h1 v-else-if="weather === 'cloudy'">흐린 날씨..</h1>
  <h1 v-else>알 수 없음</h1>
</template>
