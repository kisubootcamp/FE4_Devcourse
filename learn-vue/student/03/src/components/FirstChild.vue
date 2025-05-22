<!-- 컴포넌트 파일 이름름은 최소 두단어로 이루어져야함 -->
<script>
export default {
  name: 'FirstChild',
  data() {
    return {
      color: 'blue',
      isShow: true,
    }
  },
  // props안에 최소한 type속성은 들어가도록 권장
  props: {
    name: {
      type: String, //String,Number,Array,Object,Boolean,Function
      required: true, //필수속성이라는 뜻뜻
    },
    age: {
      type: Number,
      default() {
        return 50
      },
      validator(value) {
        return value < 50
      },
    },
    email: {
      type: String,
      validator(value) {
        return value.includes('@') //콘솔에서 경고창으로 알려줌
      },
    },
  },
}
</script>
<template>
  <div>
    <h1 :class="{ isLoggedin: isShow }" :style="{ color, textDecoration: 'underline' }">
      FirstChild Vue
    </h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ email }}</h1>
    <h2>FirstChild Vue</h2>
  </div>
</template>
<style scoped>
.isLoggedin {
  font-size: 50px;
}
</style>
