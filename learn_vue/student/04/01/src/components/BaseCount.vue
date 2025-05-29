<script>
export default {
  name: 'BaseCount',
  data() {
    return {
      count: 10,
    }
  },
  //   beforeCreate() {
  //     console.log('beforeCreate')
  //   },
  //   created() {
  //     console.log('created')
  //   },
  //   beforeMount() {
  //     console.log('beforeMount')
  //   },
  //   mounted() {
  //     console.log('mounted')
  //   },
  //   beforeUpdate() {
  //     console.log('beforeUpdate')
  //   },
  //   updated() {
  //     console.log('updated')
  //   },
  //   beforeUnmount() {
  //     console.log('beforeUnmount')
  //   },
  //   unmounted() {
  //     console.log('unmounted')
  //   },

  computed: {
    doubleCount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
}
</script>
<template>
  <h1>{{ count }}</h1>
  <button @click="count++">클릭</button>
</template>
<style scoped></style>
