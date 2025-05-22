<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      textCount: 0,
      onlyText: '',
      onlyTextCount: 0,
      byteCount: 0,
      trimByteCount: 0,
      allCopy: '',
    }
  },
  methods: {
    textCounter(e) {
      const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/

      this.text = e.target.value
      this.textCount = this.text.length

      this.onlyText = this.text.replace(/(\s*)/g, '')
      this.onlyTextCount = this.onlyText.length

      this.byteCount = [...this.text].reduce((acc, char) => {
        return acc + (regex.test(char) ? 2 : 1)
      }, 0)
      this.trimByteCount = [...this.onlyText].reduce((acc, char) => {
        return acc + (regex.test(char) ? 2 : 1)
      }, 0)
    },

    allCopyHandler() {
      navigator.clipboard.writeText(this.text)
    },
    resetHandler() {
      this.text = ''
      this.textCount = 0
      this.onlyTextCount = 0
      this.trimByteCount = 0
      this.byteCount = 0
      this.onlyText = ''
    },
  },
}
</script>
<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea placeholder="내용을 입력해주세요" @input="textCounter" v-model="text"></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ textCount }}</span> 자 | <span>{{ byteCount }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ onlyTextCount }}</span> 자 | <span>{{ trimByteCount }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="allCopyHandler">전체복사</button>
        <button @click="resetHandler">초기화</button>
      </div>
    </div>
  </div>
</template>
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
  cursor: pointer;
}

.saramin .btn-area button:nth-child(1) {
  background-color: #9c9c9c;
  color: white;
}
</style>
