<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    printHaha: function () {
      console.log('Haha')
    },
    printHello: function (name) {
      console.log(name)
    },
  },
}
</script>
<template>
  <button
    @click="
      () => {
        printHaha()
        printHello('handsome')
      }
    "
  >
    클릭
  </button>
  <button @click="printHello('handsome')">클릭</button>
</template>
<style scoped></style>
