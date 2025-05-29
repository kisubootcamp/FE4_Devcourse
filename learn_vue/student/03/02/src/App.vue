<!-- <script>
import FirstChild from './components/FirstChild.vue'
import SecondChild from './components/SecondChild.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    FirstChild,
    SecondChild,
  },
  methods: {
    greet() {
      console.log('안녕')
    },
    printHello(useObj) {
      console.log('hello', useObj.name, useObj.age)
    },
  },
}
</script>
<template>
  <h1>app</h1>
  <FirstChild name="jiyu" email="tes@tgmail.com" :age="30" />
  <SecondChild my-name="sususu" @greet="greet" @print-hello="printHello" />
</template>
<style scoped></style> -->

<script>
import CountButtons from './components/CountButtons.vue'
import CountDisplay from './components/CountDisplay.vue'
import CountGroup from './components/CountGroup.vue'
import CountProps from './components/CountProps.vue'

export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  components: {
    CountGroup,
    CountButtons,
    CountDisplay,
    CountProps,
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
  // 전역 상태 관리 비슷한 것
  provide() {
    return {
      name: 'sucoding',
    }
  },
}
</script>
<template>
  <CountDisplay :count="count" />
  <CountButtons @increment="increment" @decrement="decrement" @reset="reset" />
  <CountProps :increment="increment" :decrement="decrement" :reset="reset" />
  <div>
    <CountGroup
      :count="count"
      @incrementByAmount="incrementByAmount"
      @increment="increment"
      @decrement="decrement"
      @reset="reset"
    />
  </div>
</template>
<style scoped></style>
