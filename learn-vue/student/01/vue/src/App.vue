<script>
export default {
  //Options API 사용
  data() {
    return {
      condition: 'A',
      fruits: ['apple', 'banana', 'orange'],
      userObj: {
        name: '철수',
        age: 20,
      },
    }
  },
}
</script>
<template>
  <!--텍스트 보간-->
  <h1>{{ message }}</h1>
  <h1>{{ 3 * 3 }}</h1>
  <h1>{{ (3 * 3) % 2 === 0 ? '짝수' : '홀수' }}</h1>
</template>
<style>
h1,
p {
  color: green;
}
</style>
