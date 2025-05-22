<script>
import CountButtons from './components/CountButtons.vue'
import CountDisplay from './components/CountDisplay.vue'

export default {
  name: 'App',
  components: {
    CountButtons,
    CountDisplay,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp() {
      return (this.count += 1)
    },
    reset() {
      return (this.count = 0)
    },
    countDown() {
      return (this.count -= 1)
    },
  },
}
</script>
<template>
  <h1>Appvue</h1>
  <CountDisplay :count="count" />
  <CountButtons @up="countUp" @reset="reset" @down="countDown" />
</template>
<style scoped></style>

<!-- <script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    greet() {
      console.log('greet')
    },
    printHello(name, age) {
      console.log('hello', name, age)
    },
  },
}
</script>
<template>
  <h1>App</h1>
  <FirstChild name="sucoding" :age="30" email="test@test.com" />
  <SecondChild my-custom-value="sucoding" @greet="greet" @print-hello="printHello" />
  <button @click="greet">click</button>
  <button @click="() => greet()">click</button>
  <button @print-hello="({ anme, age }) => printHello(name, age)">click</button>
</template>

<style scoped></style> -->

<!-- 사람인 calculator -->
<!-- <template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          :value="text"
          @input="updateCount($event)"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ withSpace.length }}</span> 자 |
          <span>{{ getByteLength(withSpace) }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ withoutSpace.length }}</span> 자 |
          <span>{{ getByteLength(withoutSpace) }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyText">전체복사</button>
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
    }
  },
  methods: {
    updateCount(e) {
      this.text = e.target.value
    },
    reset() {
      this.text = ''
    },
    getByteLength(str) {
      let byte = 0
      for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i)
        if (ch.match(/[ㄱ-ㅎㅏ-ㅣ가-힣|]/)) {
          byte += 2
        } else {
          byte += 1
        }
      }
      return byte
    },
    copyText() {
      navigator.clipboard.writeText(this.text).then(() => {
        alert('복사되었습니다.')
      })
    },
  },
  computed: {
    withSpace() {
      return this.text
    },
    withoutSpace() {
      return this.text.replace(/\s/g, '')
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
</style> -->
