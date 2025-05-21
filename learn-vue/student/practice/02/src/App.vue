<script>
export default {
  name: 'App',
  data() {
    return {
      byte: 0,
      length: 0,
      nospaceByte: 0,
      nospaceLength: 0,
      text: '',
    }
  },
  methods: {
    handleChange(e) {
      this.text = e.target.value
      this.length = this.text.length
      this.nospaceLength = this.text.split(' ').join('').length

      let kor = (this.text.match(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g) || []).length
      let notkor = this.text.length - kor
      let space = (this.text.match(/ /g) || []).length
      console.log(space)

      this.byte = kor * 2 + notkor
      this.nospaceByte = kor * 2 + notkor - space
    },
    handleReset() {
      this.text = ''
      this.nospaceByte = 0
      this.nospaceLength = 0
      this.length = 0
      this.byte = 0
    },
    handleCopy() {
      navigator.clipboard
        .writeText(this.text)
        .then(() => {
          console.log('전체 복사됨')
        })
        .catch((e) => {
          console.error(e)
        })
    },
  },
}
</script>
<template>
  <!-- 공백 포함, 공백제외 -->
  <!-- 전체복사 (클립보드 복사 mdn ㄱㄱ), 초기화 -->

  <h1>공백 포함 글자수: {{ length }} byte: {{ byte }}</h1>
  <h1>공백 제외 글자수: {{ nospaceLength }} byte: {{ nospaceByte }}</h1>
  <textarea v-model="text" @input="handleChange"></textarea>
  <button @click="handleCopy">전체복사</button>
  <button @click="handleReset">초기화</button>
</template>
<style scoped></style>
