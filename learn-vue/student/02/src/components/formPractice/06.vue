<template>
  <div>
    <h1>{{ selected.join(', ') }}</h1>
    <label for="apple">Apple</label>
    <input type="checkbox" id="apple" value="apple" v-model="selected" />
    <label for="banana">Banana</label>
    <input type="checkbox" id="banana" value="banana" v-model="selected" />
    <label for="orange">Orange</label>
    <input type="checkbox" id="orange" value="orange" v-model="selected" />
  </div>
</template>

<script>
export default {
  name: 'PracticeForm06',
  data() {
    return {
      selected: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
