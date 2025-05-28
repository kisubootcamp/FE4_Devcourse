<script>
export default {
  name: 'baseCount',
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    doublecount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
  mounted() {
    console.log(this.$parent.name)
  },
  // beforeCreate() {
  //   console.log('beforeCreate', this.count)
  // },
  // created() {
  //   console.log('created', this.count)
  // },
  // beforeMount() {
  //   console.log('beforeMount')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate', this.count)
  // },
  // updated() {
  //   console.log('created', this.count)
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount')
  // },
  // unmounted() {
  //   console.log('unmounted')
  // },
}
</script>
<template>
  <h1>count: {{ count }}</h1>
  <button @click="count += 1">count</button>
</template>
<style scoped></style>
