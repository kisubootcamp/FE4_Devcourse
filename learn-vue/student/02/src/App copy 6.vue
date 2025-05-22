<script>
export default {
  name: 'App',
  data() {
    return {
      fruits: [],
    }
  },
}
</script>
<template>
  <p>선택한 과일: {{ fruits }}</p>
  <div>
    <label><input type="checkbox" v-model="fruits" value="사과" />사과</label>
    <label><input type="checkbox" v-model="fruits" value="바나나" />바나나</label>
    <label><input type="checkbox" v-model="fruits" value="오렌지" />오렌지</label>
  </div>
</template>
<style scoped></style>
