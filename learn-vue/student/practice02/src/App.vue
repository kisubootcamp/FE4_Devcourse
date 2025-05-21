<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 25,
      text: '',
      selectedOption: 'apple',
      selectedItems: [],
      gender: 'male',
      selectedColor: '#ffffff',
    }
  },
  methods: {
    handleNameChange(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <form>
    <h1>{{ name }}</h1>
    <input type="text" :value="name" @input="handleNameChange" />
  </form>
  <label>
    <h1>{{ isChecked ? '동의합니다' : '동의하지 않습니다' }}</h1>
    <input type="checkbox" v-model="isChecked" />
    회원가입 약관에 동의합니다.
  </label>
  <form>
    <h1>{{ age }}</h1>
    <input type="range" min="1" max="100" v-model="age" />
  </form>
  <form>
    <h1>{{ text }}</h1>
    <textarea v-model="text"></textarea>
  </form>
  <form>
    <h1>{{ selectedOption }}</h1>
    <select v-model="selectedOption">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
  </form>
  <br />
  <div>
    <h1>{{ selectedItems.join(',') }}</h1>
    <label>
      <input type="checkbox" v-model="selectedItems" value="apple" />
      apple
    </label>
    <label>
      <input type="checkbox" v-model="selectedItems" value="banana" />
      banana
    </label>
    <label>
      <input type="checkbox" v-model="selectedItems" value="orange" />
      orange
    </label>
  </div>
  <div>
    <h1>{{ gender }}</h1>
    <label>
      <input v-model="gender" type="radio" name="gender" value="male" />
      <input v-model="gender" type="radio" name="gender" value="female" />
    </label>
  </div>
  <div>
    <input type="color" v-model="selectedColor" />
    <div
      :style="{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: selectedColor,
      }"
    ></div>
    <p>{{ selectedColor }}</p>
  </div>
</template>
<style scoped></style>
