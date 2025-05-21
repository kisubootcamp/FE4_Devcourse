<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      drink: '',
      price: 0,
    }
  },
  methods: {
    handleChange(e) {
      this.text = e.target.value
    },
    handleDrinkChange() {
      if (this.drink === 'americano') this.price = 1000
      if (this.drink === 'latte') this.price = 1500
      if (this.drink === 'juice') this.price = 2000
    },
  },
}
</script>
<template>
  <!-- submit, click, input, change, keydown(keyup) + .enter -->
  <h1>{{ drink }} / {{ price }}</h1>
  <form @submit.prevent></form>
  <button @click="() => console.log('hello')">클릭</button>
  <!-- <input type="text" v-model="text" /> -->
  <input type="text" @input="handleChange" />
  <select v-model="drink" @change="handleDrinkChange">
    <option value="">선택하세요</option>
    <option value="americano">아메리카노</option>
    <option value="latte">라떼</option>
    <option value="juice">주스</option>
  </select>
</template>
<style scoped></style>
