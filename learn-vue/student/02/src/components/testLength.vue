<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea v-model="text" placeholder="내용을 입력해주세요" @input="countText"></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ space }}</span> 자 | <span>{{ byte }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ spaceRemove }}</span> 자 | <span>{{ byteSpaceRemove }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyAll">전체복사</button>
        <button @click="clear">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
// 엔터 스페이스 영어 특수 문자 1바이트
// 한글 2바이트
export default {
  data() {
    return {
      text: '',
      space: 0,
      spaceRemove: 0,
      byte: 0,
      byteSpaceRemove: 0,
    }
  },
  methods: {
    countText() {
      const noSpaceText = this.text.replace(/\s/g, '')

      this.space = this.text.length
      this.spaceRemove = noSpaceText.length

      // 한글 매치
      const hangulMatch = this.text.match(/[가-힣]/g) || []
      // 공백 제외 한글 매치
      const hangulMatchNoSpace = noSpaceText.match(/[가-힣]/g) || []

      this.byte = hangulMatch.length * 2 + (this.text.length - hangulMatch.length)
      this.byteSpaceRemove =
        hangulMatchNoSpace.length * 2 + (noSpaceText.length - hangulMatchNoSpace.length)
    },
    clear() {
      this.text = ''
      this.space = 0
      this.spaceRemove = 0
      this.byte = 0
      this.byteSpaceRemove = 0
    },
    copyAll() {
      navigator.clipboard.writeText(this.text)
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
