<!-- 1. -->
<!-- <script>
export default {
  name: 'App',
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
  <h1>{{ name }}</h1>
  <input type="text" @input="changeHandler" />
</template>

<style scoped></style> -->

<!-- 2. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      isChecked: false,
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
  <h1>{{ isChecked ? '동의':'비동의' }}</h1>
  <label>
    <input type="checkbox" v-model="isChecked" />
    회원가입 약관에 동의합니다
  </label>
</template>

<style scoped></style> -->

<!-- 3. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      age: 25,
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
  <h1>{{ age }}</h1>
  <label>
    <input type="range" v-model="age" min="1" max="100" />
  </label>
</template>

<style scoped></style> -->

<!-- 4. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    updateText(e) {
      this.text = e.target.value
    },
  },
}
</script>

<template>
  <h1>{{ text }}</h1>
  <label>
    <textarea @input="updateText" :value="text"></textarea>
  </label>
</template>

<style scoped></style> -->

<!-- 5. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      selectedOption: 'apple',
    }
  },
}
</script>

<template>
  <h1>{{ selectedOption }}</h1>
  <select>
    <input v-model="selectedOption" />
    <option value="apple"></option>
    <option value="banana"></option>
    <option value="orange"></option>
  </select>
</template>

<style scoped></style> -->

<!-- 6. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      selectedItems: [],
    }
  },
}
</script>

<template>
  <div>
    <label> <input type="checkbox" v-model="selectedItems" value="apple" /></label>
    <label><input type="checkbox" v-model="selectedItems" value="banana" /></label>
    <label><input type="checkbox" v-model="selectedItems" value="orange" /></label>
    <h1>{{ selectedItems.join(', ') }}</h1>
  </div>
</template>

<style scoped></style> -->

<!-- 7. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      gender: 'male',
    }
  },
}
</script>

<template>
  <div>
    <label>
      <input type="radio" name="gender" value="male" />
      <input type="radio" name="gender" value="female" />
    </label>
    <h1>{{ gender }}</h1>
  </div>
</template>

<style scoped></style> -->

<!-- 8. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      selectedColor: '#ffffff',
    }
  },
}
</script>

<template>
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
    <h1>{{ selectedColor }}</h1>
  </div>
</template>

<style scoped></style> -->

<!-- day03-0에 답안 -->
<!--사람인 글자수세기-->
<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea v-model="text" @input="inputHandler" placeholder="내용을 입력해주세요"></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ spaceInclude }}</span> 자 | <span>{{ spaceInclude }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ spaceExclude }}</span> 자 | <span>{{ spaceExclude }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyHandler">전체복사</button>
        <button @click="resetHandler">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      spaceInclude: 0,
      spaceExclude: 0,
    }
  },
  methods: {
    inputHandler() {
      const inputStr = this.text.split('')
      this.spaceInclude = inputStr.reduce(
        (len, input) => (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(input) ? (len += 2) : (len += 1)),
        0,
      )
      this.spaceExclude = inputStr.reduce(
        (len, input) =>
          /[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(input) ? (len += 2) : input === ' ' ? len : (len += 1),
        0,
      )
    },
    resetHandler() {
      this.text = ''
      this.spaceInclude = 0
      this.spaceExclude = 0
    },
    async copyHandler() {
      try {
        await navigator.clipboard.writeText(this.text)
        alert('복사 성공!')
      } catch (err) {
        alert('복사 실패!', err)
      }
    },
  },
}
</script>

<style scoped>
.saramin {
  width: 564px;
  margin: 100px auto;
}

.saramin .box {
  border-top: 1px solid #676767;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-block: 1px solid #ddd;
}

.saramin h1 {
  font-size: 32px;
  margin-bottom: 50px;
  line-height: 1;
  font-weight: normal;
}

.saramin .string-length {
  padding: 30px;
}

.saramin .string-length textarea {
  width: 100%;
  height: 400px;
  border: none;
}

.saramin .str-info {
  border-top: 1px solid #ebebeb;
  padding: 0 22px;
  font-size: 14px;
  margin: 0px 8px;
}

.saramin .str-info span {
  font-size: 15px;
  color: #ff662f;
  font-weight: bold;
}

.saramin .btn-area {
  background-color: #fbfbfb;
  padding: 35px 0;
  text-align: center;
}

.saramin .btn-area button {
  background: transparent;
  border: 1px solid #d9d9d9;
  width: 160px;
  height: 40px;
  margin: 0 2px;
}

.saramin .btn-area button:nth-child(1) {
  background-color: #9c9c9c;
  color: white;
}
</style>
