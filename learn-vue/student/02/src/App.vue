<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 0,
      text: '',
      selectedOption: 'apple',
      selectedItems: [],
      gender: 'male',
      selectedColor: '#fff',
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
  <!-- 1 -->
  <input type="text" v-model="name" @input="handleNameChange" />
  <p>{{ name }}</p>
  <!-- 2 -->
  <div>
    <label for="">
      <input type="checkbox" v-model="isChecked" />
      약관에 동의
    </label>
    <p>{{ isChecked ? '동의' : '비동의' }}</p>
  </div>
  <!-- 3 -->
  <div>
    <input type="range" v-model="age" min="1" max="100" />
    <p>{{ age }}</p>
  </div>
  <!-- 4 -->
  <div>
    <textarea name="" id="" v-model="text"></textarea>
    <p>{{ text }}</p>
  </div>
  <!-- 5 -->
  <div>
    <select name="" id="" v-model="selectedOption">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>{{ selectedOption }}</p>
  </div>
  <!-- 6 -->
  <div>
    <label for=""><input type="checkbox" v-model="selectedItems" value="apple" />apple</label>
    <label for=""><input type="checkbox" v-model="selectedItems" value="banana" />banana</label>
    <label for=""><input type="checkbox" v-model="selectedItems" value="orange" />orange</label>
    <p>{{ selectedItems.join(', ') }}</p>
  </div>
  <!-- 7 -->
  <div>
    <label for="">
      <input type="radio" name="gender" value="male" v-model="gender" />
      <input type="radio" name="gender" value="female" v-model="gender" />
    </label>
    <p>{{ gender }}</p>
  </div>
  <!-- 8 -->
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
  </div>
  <p>{{ selectedColor }}</p>
</template>
<style scoped></style>
