<script>
export default {
  name: 'App',
  data() {
    return {
      str: '',
      trimStr: '',
      count: 0,
      trimCount: 0,
      byteCount: 0,
      trimByteCount: 0,
    }
  },
  methods: {
    strCount(e) {
      this.str = e.target.value
      this.trimStr = e.target.value.replaceAll(' ', '').replaceAll('\n', '')

      this.count = this.str.length
      this.trimCount = this.trimStr.length

      this.byteCount = [...this.str].reduce((acc, crr) => {
        if (/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]$/.test(crr)) {
          return (acc += 2)
        } else {
          return (acc += 1)
        }
      }, 0)

      this.trimByteCount = [...this.trimStr].reduce((acc, crr) => {
        if (/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]$/.test(crr)) {
          return (acc += 2)
        } else {
          return (acc += 1)
        }
      }, 0)
    },
    reset() {
      this.str = ''
      this.trimStr = ''
      this.count = 0
      this.trimCount = 0
      this.byteCount = 0
      this.trimByteCount = 0
    },
    // 복사하기 클립보드
    copy() {
      navigator.clipboard.writeText(this.str)
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
          @input="strCount($event)"
          v-model="str"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ count }}</span> 자 | <span>{{ byteCount }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ trimCount }}</span> 자 | <span>{{ trimByteCount }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copy">전체복사</button>
        <button type="reset" @click="reset">초기화</button>
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
