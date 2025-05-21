<!-- 1번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      name: '',
    }
  },

  methods: {
    changeHandler(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <p>{{ name }}</p>
  <input type="text" @input="changeHandler" :value="name" />
</template>
<style scoped></style> -->

<!-- 2번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      isChecked: false,
    }
  },
}
</script>
<template>
  <p>{{ isChecked ? '동의' : '비동의' }}</p>
  <label>
    <input type="checkbox" v-model="isChecked" />
    회원가입 약관에 동의합니다.
  </label>
</template>
<style scoped></style> -->

<!-- 3번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      age: 25,
    }
  },

  methods: {
    changeAge(e) {
      this.age = e.target.value
    },
  },
}
</script>
<template>
  <h1>{{ age }}</h1>
  <input type="range" min="1" max="100" v-model="age" />
</template>
<style scoped></style> -->

<!-- 4번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      message: '',
    }
  },
}
</script>
<template>
  <p>{{ message }}</p>
  <textarea v-model="message"></textarea>
</template>
<style scoped></style> -->

<!-- 5번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      fruit: 'apple',
    }
  },
}
</script>
<template>
  <p>{{ fruit }}</p>
  <select v-model="fruit">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>
</template>
<style scoped></style> -->

<!-- 6번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      fruits: [],
    }
  },
}
</script>
<template>
  <p>{{ fruits.join(', ') }}</p>
  <label> <input type="checkbox" value="apple" v-model="fruits" />apple </label>
  <label> <input type="checkbox" value="banana" v-model="fruits" />banana </label>
  <label> <input type="checkbox" value="orange" v-model="fruits" />orange </label>
</template>
<style scoped></style> -->

<!-- 7번. -->
<!-- <script>
export default {
  name: 'App2',
  data() {
    return {
      gender: 'male',
    }
  },
}
</script>
<template>
  <p>{{ gender }}</p>
  <label> <input type="radio" value="male" v-model="gender" />남자 </label>
  <label> <input type="radio" value="female" v-model="gender" />여자 </label>
</template>
<style scoped></style> -->

<!-- 8번. -->
<script>
export default {
  name: 'App2',
  data() {
    return {
      selectedColor: '#ffffff',
    }
  },
}
</script>
<template>
  <div>
    <p>{{ selectedColor }}</p>
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
</template>
<style scoped></style>
