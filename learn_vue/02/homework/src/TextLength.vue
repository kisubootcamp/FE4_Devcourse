<script>
//-모두 2바이트
//-영어 스페이스바 엔터 특수기호 1바이트
//-한글 2바이트
//-네비게이터.클립보드 : 브라우저 내장 객체
export default {
  name: 'TextLength',
  data() {
    return {
      content: '',
      byte: 0,
      gapByte: 0,
      lastChar: '',
      isComposing: false,
    }
  },
  methods: {
    handleInput(e) {
      //composing(문자 조합) false면 아래 로직 실행
      if (this.isComposing) return
      if (e.inputType === 'deleteContentBackward') {
        const text = e.target.value
        this.content = text
        this.lastChar = text.charAt(text.length - 1)
        const char = this.lastChar

        if (/\s/.test(char)) {
          this.byte -= 1
          return
        }

        if (/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(char)) {
          this.byte -= 2
          this.gapByte -= 2
          return
        }

        if (/[A-Za-z]/.test(char) || /[^A-Za-z0-9\s가-힣]/.test(char)) {
          this.byte -= 1
          this.gapByte -= 1
          return
        }

        return
      }

      const text = e.target.value
      this.content = text
      this.lastChar = e.data
      const char = this.lastChar

      if (!char) return

      if (/\s/.test(char)) {
        this.byte += 1
        return
      }

      if (/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(char)) {
        this.byte += 2
        this.gapByte += 2
        return
      }

      if (/[A-Za-z]/.test(char) || /[^A-Za-z0-9\s가-힣]/.test(char)) {
        this.byte += 1
        this.gapByte += 1
        return
      }
    },
    handleGapInput() {
      const inputLength = this.content.length
      if (inputLength - this.gapSubtraction <= 0) return 0
      return inputLength - this.gapSubtraction
    },
    onCompositionEnd(e) {
      this.isComposing = false
      this.handleInput(e)
    },
  },
  computed: {
    gapSubtraction() {
      return this.byte - this.gapByte
    },
  },
}
</script>
<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          @input="handleInput"
          @compositionstart="isComposing = true"
          @compositionend="onCompositionEnd"
          v-model="content"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ content.length }}</span> 자 | <span>{{ byte }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ handleGapInput() }}</span> 자 | <span>{{ gapByte }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button>전체복사</button>
        <button
          @click="
            () => {
              content = ''
              byte = 0
              gapByte = 0
              lastChar = ''
              isComposing = false
            }
          "
        >
          초기화
        </button>
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
}

.saramin .btn-area button:nth-child(1) {
  background-color: #9c9c9c;
  color: white;
}
</style>
