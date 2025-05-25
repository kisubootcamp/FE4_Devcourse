<!-- <script>
import BaseCount from './components/BaseCount.vue'
import BaseTimer from './components/BaseTimer.vue'

export default {
  name: 'App',
  components: {
    BaseCount,
    BaseTimer,
  },
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<template>
  <BaseTimer v-if="isShow" />
  <button @click="isShow = !isShow">click</button>
</template>
<style scoped></style> -->

<script>
import BaseButton from './components/BaseButton.vue'
import BaseCount from './components/BaseCount.vue'
import DefaultLayout from './Layout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    BaseCount,
    BaseButton,
    DefaultLayout,
  },
  data() {
    return {
      text: 'SignUp',
    }
  },
  mounted() {
    // const h1El = document.querySelector('h1')
    // const text = h1El.innerText
    // console.log(text)
    console.log(this.$refs.h1El.innerText)
    console.log(this.$refs.BaseCount)
  },
  methods: {
    incrementParent() {
      this.$refs.baseCount.increment()
    },
  },
}
</script>
<template>
  <h1 ref="h1El">Hello</h1>
  <BaseCount ref="baseCount" />
  <button @click="incrementParent">외부버튼</button>
  <br />
  <BaseButton v-slot="{ text }">
    <span>{{ text }}</span>
  </BaseButton>

  <!-- <DefaultLayout>
    <template v-slot:header>
      <header><h1>Header</h1></header>
    </template>
    <template v-slot:main>
      <main><h1>main</h1></main>
    </template>
    <template v-slot:footer>
      <footer><h1>footer</h1></footer>
    </template>
  </DefaultLayout> -->
</template>
<style scoped>
span {
  color: red;
}
</style>
