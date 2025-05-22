<template>
  <div>
    <input type="color" v-model="color" />
    <div
      style="
        width: 100px;
        height: 100px;
        border-color: black;
        border-width: 1px;
        border-style: solid;
        margin-top: 10px;
      "
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'PracticeForm08',
  data() {
    return {
      color: '#ffffff',
    }
  },
}
</script>

<style lang="scss" scoped></style>
