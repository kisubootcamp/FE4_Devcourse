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
  <h1>{{ fruits }}</h1>
  <label><input type="checkbox" v-model="fruits" value="apple" />사과</label>
  <label><input type="checkbox" v-model="fruits" value="banana" />바나나</label>
  <label><input type="checkbox" v-model="fruits" value="orange" />오렌지</label>
</template>
<style scoped></style>
