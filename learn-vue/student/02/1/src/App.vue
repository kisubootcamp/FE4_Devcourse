<script>
export default {
  name: 'App',
  data() {
    return {
      text: 'male',
      drink: '',
      price: 0,
    }
  },
  methods: {
    handleChange(e) {
      this.text = e.target.value
    },
    handleChange2() {
      if (this.drink === 'americano') this.price = 1000
      else if (this.drink === 'latte') this.price = 1500
      else if (this.drink === 'juice') this.price = 2000
    },
  },
}
</script>
<template>
  <form @submit.prevent>
    <h1>{{ text }}</h1>
    <input type="text" @input="handleChange" />
    <button @click="console.log('클릭')">클릭</button>
  </form>
  <h1>{{ drink }} - {{ price }}</h1>
  <select v-model="drink" @change="handleChange2">
    <option value="">선택하세요</option>
    <option value="americano">아메리카노(1000)</option>
    <option value="latte">라떼(1500)</option>
    <option value="juice">주스(2000)</option>
  </select>
</template>
<style scoped></style>
