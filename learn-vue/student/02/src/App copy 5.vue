<script>
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
      fruit: 'banana',
      checked: '',
    }
  },
  methods: {
    handleSubmit() {
      // console.log(this.email)
      // console.log(this.password)
      console.log(this.fruit)
    },
    changeHandler(e) {
      this.email = e.target.value
    },
  },
}
</script>
<template>
  <!-- v-model -->
  <!-- 한글의 경우 실시간 입력된 값 반영이 잘 안됨 -->
  <!-- <h1>email: {{ email }}</h1>
  <input type="text" @input="changeHandler" />
  <input type="text" v-model="email" />
  <button>로그인</button>
  {{ email.length }} -->

  <h1>{{ fruit }}</h1>
  <h1>{{ checked }}</h1>
  <form @submit.prevent="handleSubmit">
    <!-- <input type="text" name="email" v-model="email" /> -->
    <!-- <textarea name="email" v-model="email"></textarea> -->
    <!-- <input type="color" v-model="email" /> -->
    <!-- <input type="range" v-model="email" />
    <input type="password" name="password" v-model="password" /> -->

    <!-- <select v-model="fruit">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select> -->

    <!-- <input type="checkbox" v-model="checked" /> -->

    <label>
      <input type="checkbox" v-model="checked" true-value="apple" false-value="" />
      apple
    </label>
    <br />
    <button>전송</button>
  </form>
</template>
<style scoped></style>
