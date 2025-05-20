<script>
import Level1 from './components/Level1.vue'
import Level2 from './components/Level2.vue'
import Level3 from './components/Level3.vue'
import Level4 from './components/Level4.vue'

export default {
  components: { Level1, Level2, Level3, Level4 },
  name: 'App',
  data() {
    return {}
  },
}
</script>
<template>
  <h1 style="color: red">Level1</h1>
  <Level1 />
  <h1 style="color: red">Level2</h1>
  <Level2 />
  <h1 style="color: red">Level3</h1>
  <Level3 />
  <h1 style="color: red">Level4</h1>
  <Level4 />
</template>
<style scoped></style>
