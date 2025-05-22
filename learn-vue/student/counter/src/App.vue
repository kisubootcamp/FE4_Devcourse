<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          @input="handleInput"
          @keydown="handleKeyDown"
          v-model="inputText"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ countedWithSpace }}</span> 자 | <span>{{ byteWithSpace }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ countedWithoutSpace }}</span> 자 |
          <span>{{ byteWithoutSpace }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="handleCopy()">전체복사</button>
        <button @click="handleReset()">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputText: '',
      // byteWithSpace: 0,
    }
  },
  methods: {
    handleInput(e) {
      this.inputText = e.target.value
    },
    handleCopy() {
      navigator.clipboard.writeText(this.inputText)
    },
    handleReset() {
      this.inputText = ''
    },
    handleKeyDown() {
      this.byteWithSpace += 1
    },
  },
  computed: {
    countedWithSpace() {
      return this.inputText.length
    },
    countedWithoutSpace() {
      return this.inputText.replace(/ /g, '').length
    },
    // getByteLength(decimal){
    //   return (decimal >> 7 || )
    // },
    byteWithSpace() {
      return this.inputText
        .split('')
        .map((s) => s.charCodeAt(0))
        .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0)
    },
    byteWithoutSpace() {
      return this.inputText
        .replace(/ /g, '')
        .split('')
        .map((s) => s.charCodeAt(0))
        .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0)
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
