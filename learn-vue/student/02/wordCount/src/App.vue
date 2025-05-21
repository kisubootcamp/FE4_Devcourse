<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      count: 0,
    }
  },
  methods: {
    changeHandler(e) {
      this.text = e.target.value
    },
    trimText() {
      return this.text.replace(/\s/g, '')
    },
    byteCount(str) {
      const hangeul = /[ㄱ-ㅎ | ㅏ-ㅣ | 가-힣]/
      const space = /\s/
      let cnt = 0
      for (let i = 0; i < str.length; i++) {
        if (space.test(str[i])) cnt += 1
        else if (hangeul.test(str[i])) cnt += 2
        else cnt += 1
      }
      return cnt
    },
    copy() {
      navigator.clipboard.writeText(this.text).then(() => alert('텍스트가 복사되었습니다.'))
    },
    reset() {
      this.text = ''
    },
  },
}
</script>
<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea @input="changeHandler" placeholder="내용을 입력해주세요" :value="text"></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ text.length }}</span> 자 | <span>{{ byteCount(text) }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ trimText().length }}</span> 자 |
          <span>{{ byteCount(trimText()) }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copy">전체복사</button>
        <!-- Navigator.clipboard -->
        <button @click="reset">초기화</button>
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
