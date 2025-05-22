<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea placeholder="내용을 입력해주세요" v-model="text" @input="countFun"></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ text.length }}</span> 자 | <span>{{ byte }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ textNoSpace }}</span> 자 | <span>{{ byte }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copied">전체복사</button>
        <button @click="reset">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
// 영어, 스페이스바, 엔터, 특수기호 - 1바이트
// 한글 - 2바이트
// 복사기능 navigator clipboard
export default {
  name: 'App',
  data() {
    return {
      text: '',
      textNoSpace: 0,
      byte: 0,
    }
  },
  methods: {
    countFun(e) {
      this.noSpace(e)
      this.oneByte()
    },
    noSpace(e) {
      this.textNoSpace = e.target.value.replace(/\s/g, '').length
    },
    reset() {
      this.text = ''
      this.textNoSpace = 0
      this.byte = 0
    },
    oneByte() {
      let total = 0
      const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
      for (let i = 0; i < this.text.length; i++) {
        if (!korean.test(this.text[i])) {
          total += 2
        } else {
          total += 1
        }
      }
      this.byte = total
    },
    copied() {
      alert('복사 되었습니다!')
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
