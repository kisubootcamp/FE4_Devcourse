<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          @input="changeHandler($event)"
          placeholder="내용을 입력해주세요"
          v-model="text"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ length }}</span> 자 | <span>{{ byte }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ nonBlankLength }}</span> 자 | <span>{{ nonBlankByte }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyAll">전체복사</button>
        <button @click="reset">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      length: 0,
      byte: 0,
      nonBlankLength: 0,
      nonBlankByte: 0,
    }
  },
  methods: {
    changeHandler(e) {
      const str = e.target.value
      this.text = str
      const { korean, rest } = this.calculateLength(str)
      this.byte = korean * 2 + rest
      this.length = str.length

      const nonBlank = str.replace(/[\s]/g, '')
      const { korean: nonBlankKorean, rest: nonBlankRest } = this.calculateLength(nonBlank)
      this.nonBlankByte = nonBlankKorean * 2 + nonBlankRest
      this.nonBlankLength = nonBlank.length
    },

    calculateLength(string) {
      const korean = string.split(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/).length - 1
      const rest = string.length - korean
      return { korean, rest }
    },

    reset() {
      if (window.confirm('작성한 내용을 모두 삭제하시겠습니까?')) {
        ;(this.text = ''),
          (this.length = 0),
          (this.byte = 0),
          (this.nonBlankLength = 0),
          (this.nonBlankByte = 0)
      }
    },

    copyAll() {
      navigator.clipboard.writeText(this.text)
      window.alert(
        '입력하신 내용이 복사되었습니다. \r Ctrl + v 키를 사용하여, 붙여 넣기를 사용하실 수 있습니다.',
      )
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
