<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea placeholder="내용을 입력해주세요" v-model="text"></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ spaceLength }}</span> 자 | <span>{{ spaceLength * 2 }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ noSpaceLength }}</span> 자 | <span>{{ noSpaceLength * 2 }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copy">전체복사</button>
        <button @click="clear">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // -모두 2바이트,
  // -영어 스페이스바 엔터 특수기호 1바이트,
  // 한글 2
  // navigate.clipboard 복사하기
  data() {
    return {
      text: '',
    }
  },
  computed: {
    spaceLength() {
      return this.text.length
    },
    noSpaceLength() {
      return this.text.replace(/\s/g, '').length
    },
  },
  methods: {
    clear() {
      this.text = ''
    },
    copy() {
      navigator.clipboard.writeText(this.text)
      alert('복사되었습니다.')
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
