<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          @input="changeStrHandler"
          v-model="str"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ calStrSpace }}</span> 자 | <span>{{ calByteSpace }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ calStrNoSpace }}</span> 자 | <span>{{ calByteNoSpace }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyStr">전체복사</button>
        <button @click="reset">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '',
      byte: 0,
    }
  },
  methods: {
    changeStrHandler(e) {
      this.str = e.target.value
    },
    reset() {
      this.str = ''
    },
    copyStr() {
      navigator.clipboard
        .writeText(this.str)
        .then(() => {
          alert('클립보드에 복사되었습니다.')
        })
        .catch((err) => {
          alert('복사 실패!', err)
        })
    },
  },
  computed: {
    calStrSpace() {
      return this.str.length
    },
    calStrNoSpace() {
      return this.str.split(' ').join('').length
    },
    calByteSpace() {
      let byte = 0
      for (let i = 0; i < this.str.length; i++) {
        const char = this.str.charCodeAt(i)
        if (char >= 0xac00 && char <= 0xd7a3) {
          byte += 2
        } else {
          byte += 1
        }
      }
      return byte
    },
    calByteNoSpace() {
      let byte = 0
      let str = this.str.split(' ').join('')
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        if (char >= 0xac00 && char <= 0xd7a3) {
          byte += 2
        } else {
          byte += 1
        }
      }
      return byte
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
```
