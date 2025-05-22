<script>
export default {
  name: 'App2',
  data() {
    return {
      text: '',
      byte: 0,
      length: 0,
      noSpaceByte: 0,
      noSpaceLength: 0,
    }
  },

  methods: {
    handleTextChange(e) {
      this.length = this.text.length
      this.byte = this.getByte(this.text)
      const noSpace = this.text.replace(/\s/g, '')

      this.noSpaceLength = noSpace.length
      this.noSpaceByte = this.getByte(noSpace)
    },

    getByte(str) {
      return new Blob([str]).size
    },

    handleReset() {
      this.text = ''
      this.length = 0
      this.byte = 0
      this.noSpaceLength = 0
      this.noSpaceByte = 0
    },

    handleCopy() {
      navigator.clipboard.writeText(this.text)
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
          v-model="text"
          @input="handleTextChange"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ length }}</span> 자 | <span>{{ byte }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ noSpaceLength }}</span> 자 | <span>{{ noSpaceByte }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="handleCopy">전체복사</button>
        <button @click="handleReset">초기화</button>
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
