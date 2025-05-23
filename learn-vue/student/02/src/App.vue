<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      count: 10,
      amount: 10,
    }
  },
  methods: {
    printHaha: function () {},
    printHello: function (name) {
      console.log(name)
    },
    decrement: function () {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    increment() {
      this.count += 1
    },
    incrementByAmount(amount) {
      this.count += amount
    },

    onKeyupHandler(event) {
      console.log(event.key)
      // 한글처럼 조합문자인 경우 다 입력하고난다음인 keydown이 유용
      // console.log('onKeyupHandler')
      // console.log(event)
    },
    onSubmitHandler() {},

    incrementByCount() {
      this.count += 1
    },
    incrementByAmount2() {
      this.amount += 1
    },
  },
}
</script>
<template>
  <button
    v-on:click="
      () => {
        printHaha()
        printHello('sucoding')
      }
    "
  >
    클릭
  </button>
  <button @click="printHello('handsome')">클릭</button>
  <!-@는 v-on의 축약형-->
<!-- <div v-memo="[count]"> -->
<!-- count값이 바뀌지 않는이상 리렌더링되지않음 -->
<!-- count값이 바뀌는 순간 amount도 같이 리렌더링됨 -->
<!-- <h1>Count:{{ count }}</h1> -->
<!-- <h1 v-once>Count:{{ count }}</h1> -->
<!-- 렌더링 한번만(메모이제이션과 관련련) -->
<!-- <button @click="decrement">감소</button>
    <button @click="reset">리셋</button>
    <button @click="increment">증가</button>
    <button @click="incrementByAmount(10)">증가</button> -->
<!--원하는 숫자만큼 증가-->

<!-- <h1>Amount:{{ amount }}</h1>
    <button @click="incrementByAmount2">amount</button> -->
<!-- </div> -->

<!-- 이벤트 수식어(modifier) -->
<!-- 이벤트의 처리 방식을 제어하는 데 사용하는 기능 -->
<!-- <form @submit.prevent="onSubmitHandler">
    <input type="text" @keydown.enter="onKeyupHandler($event)" />
    <input type="text" @keydown.tab="onKeyupHandler($event)" />
    <input type="text" @keydown.alt.enter="onKeyupHandler($event)" /> -->
<!--keydown은 눌려있는 키 인식 / keyup은 눌렸던 키 인식-->
<!-- <button type="submit">전송</button>
  </form>
  <a href="https://www.naver.com" @click.prevent>네이버 바로가기</a>
</template> -->

<!-- <style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
      fruit: 'apple',
      checked: false,
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.email)
      console.log(this.password)
      console.log(this.fruit)
    },
    changeHandler(e) {
      this.email = e.target.value
    },
  },
}
</script>

<template> -->
<!-- v-model -->
<!-- <h1>email:{{ email }}</h1>
  <input type="text" @input="changeHandler" />
  <input type="text" v-model="email" />
  {{ email.length }} -->
<!-- changeHandler같은 함수 사용하지 않아도 바로 변수와 연결시킬 수 있음 -->
<!-- v-model 사용시 한글같은 조합문자는 하나씩 덜나옴 -->
<!-- 실시간으로 입력된 값이 필요할때(ex. 실시간 글자수)는 사용하지 않음 -->
<!-- <h1>{{ checked }}</h1>
  <form @submit.prevent="handleSubmit"> -->
<!-- <input type="email" name="email" v-model="email" />
    <input type="password" name="email" v-model="password" /> -->
<!-- 입력 대부분의 타입 v-model로 받아올수있음 -->
<!-- <textarea v-model="email"></textarea>
    <button>전송</button>
    <h1>{{ fruit }}</h1>
    <select v-model="fruit">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select> -->

<!-- <label>
      <input type="checkbox" v-model="checked" true-value="apple" false="" />
      apple
    </label>
    <br />
  </form>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  data() {
    return {
      fruits: [],
      gender: 'female',
      className: 'a',
    }
  },
}
</script>

<template>
  <p>선택한 과일:{{ fruits }}</p>
  <p>선택한 성별:{{ gender }}</p>
  <p>선택한 반:{{ className }}</p>
  <div>
    <label><input type="checkbox" v-model="fruits" value="사과" />사과</label>
    <label><input type="checkbox" v-model="fruits" value="바나나" />바나나</label>
    <label><input type="checkbox" v-model="fruits" value="오렌지" />오렌지</label>

    <label><input type="radio" v-model="gender" name="gender" value="male" />남자</label>
    <label><input type="radio" v-model="gender" name="gender" value="female" />여자</label>

    <label><input type="radio" v-model="className" name="className" value="a" />a반</label>
    <label><input type="radio" v-model="className" name="className" value="b" />b반</label>
  </div>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
      drink: '',
      price: 0,
    }
  },
  methods: {
    handleChange(e) {
      this.next = e.target.value
    },
    handleDrinkChange() {
      if (this.drink === 'americano') this.price = 1000
      else if (this.drink === 'latte') this.price = 1500
      else if (this.drink === 'juice') this.price = 2000
    },
  },
}
</script>
<template> -->
<!--submit,click,input,change,keydown(keyup) +.enter-->
<!-- <h1>{{ drink }} / {{ price }}</h1>
  <form @submit.prevent></form>
  <button @click="console.log('hello')">클릭</button>
  <input type="text" @input="handleChange" />
  <select v-model="drink" @change="handleDrinkChange">
    <option value="">선택하세요</option>
    <option value="americano">아메리카노(1000)</option>
    <option value="latte">라떼(1500)</option>
    <option value="juice">주스(2000)</option>
  </select>
</template>
<style scoped></style> -->
<!-- 영어,특수문자 1byte / 한글 2byte -->
<!-- navigator.clipboard 속성 사용 -->

<!-- 계산된 속성(computed property) -->
<!-- return 값이 반드시 존재해야함 -->
<!-- 변수처럼 호출하여 사용(뒤에 소괄호() 붙이지 않음) -->
<!-- 미리 계산된 결과를 만들어두고 싶을때 사용 -->
<!-- 최대한 템플릿 안의 내용은 간결하게 -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      firstName: 'Gildong',
      lastName: 'hong',
      numArr: [1, 2, 3, 4, 5],
      count: 0,
      amount: 0,
      // numArr: [1, 2, 3],
    }
  },

  // computed는 한번 계산한다음 그 이후부터는 메모리에 저장된 값 사용(자동 캐싱,메모이제이션션)
  // 계산하기위한 참조 데이터가 변한 경우에만 다시 호출하여 계산
  //매개변수 전달 불가
  computed: {
    fullName() {
      //데이터 속성을 활용해서 무언가 계산된 결과를 만들어 둘 떄떄
      return `${this.lastName} ${this.firstName}`
    },
    evenSum() {
      console.log('method eventSum')
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },

  // methods는 템플릿에서 호출되는 횟수만큼 함수가 호출됨
  methods: {
    evensSum(numArr) {
      console.log('method eventSum')
      return numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
    evensSum2() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  // 값을 감시하다가 변경되면 렌더링 되도록
  watch: {
    count(newValue, oldValue) {
      console.log('count 변경됨!!', newValue, oldValue)
    },
    amount() {
      console.log('amount 변경됨!!')
    },
    // numArr() {
    //   console.log('numArr 변경됨')
    // }, => numArr변경되어도 안찍힘(참조는 그대로,값만 바뀐거라 안바뀌었다고 생각각)
    //  numArr:{
    //   handler(){
    //     console.log('변경됨!!')
    //   },
    //   deep:true, //배열 뿐만 아니라 객체 속 속성변경도 감지
    //  },
  },
}
</script>
<template>
  <h1>{{ fullName }}</h1>
  <h1>Computed EvenSum:{{ evenSum }}</h1>
  <h1>EvenSum:{{ evensSum(numArr) }}</h1>
  <h1>EvenSum:{{ evensSum2() }}</h1>
  <button @click="numArr = [...numArr, 3]">클릭</button>

  <h1>Count:{{ count }}</h1>
  <button @click="count += 1">클릭</button>
  <h1>Amount:{{ amount }}</h1>
  <button @click="amount += 1">클릭</button>
  <h1>{{ numArr }}</h1>
  <button @click="numArr.push(3)">추가</button>
</template>

<style scoped></style> -->
