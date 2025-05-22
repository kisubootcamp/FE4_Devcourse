<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      amount: 0,
      numArr: [1, 2],
      numArrD: [1, 2],
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log('변경됨1', newValue, oldValue)
    },
    amount() {
      console.log('amount 변경')
    },
    numArr() {
      console.log('numArr 변경')
    },

    numArrD: {
      handler(n, o) {
        console.log(n)
        console.log(o)
      },
      deep: true,
    },
  },
}
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count += 1">click</button>
  <h1>amount: {{ amount }}</h1>
  <button @click="amount += 1">click</button>
  <h1>numArr: {{ numArr }}</h1>
  <button @click="numArr.push(3)">click</button>
  <h1>numArrD: {{ numArrD }}</h1>
  <button @click="numArrD.push(3)">click</button>
</template>
<style scoped></style>

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      numArr: [1, 2, 3, 4, 5],
    }
  },

  computed: {
    evenSum() {
      console.log('computed sum')
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },

  methods: {
    sumEven(numArr) {
      console.log('methods sum')
      return numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
    sumEven2() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
}
</script>
<template>
  <h1>
    <h1>EvenSum:{{ evenSum }}</h1>
    <h1>EvenSum:{{ evenSum }}</h1>
    <button @click="numArr.push(8)">click</button>
  </h1>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      firstName: 'Gildong',
      lastName: 'hong',
    }
  },
  computed: {
    fullName() {
      return `${this.lastName}${this.firstName}`
    },
  },
}
</script>
<template>
  <h1>{{ lastName }}{{ firstName }}</h1>
  <h1>{{ fullName }}</h1>
  <h1>{{ greet }}</h1>
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
    hadleChange(e) {
      this.text = e.target.value
    },
    handleDrinkChange() {
      if (this.drink === 'americano') this.price = 1000
      if (this.drink === 'latte') this.price = 1300
      if (this.drink === 'juice') this.price = 1500
    },
  },
}
</script>
<template>
  {{ text }}
  <h1>{{ drink }} / {{ price }}</h1>
  <form @submit.prevent></form>
  <button @click="() => console.log('clicked!')">클릭</button>
  <input type="text" v-model="text" />
  <input type="text" @input="hadleChange" />
  <select v-model="drink" @change="handleDrinkChange">
    <option value="">선택하세요.</option>
    <option value="americano">americano (1000)</option>
    <option value="latte">latte (1300)</option>
    <option value="juice">juice (1500)</option>
  </select>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      gender: 'male',
      classname: 'a',
    }
  },
}
</script>
<template>
  <p>선택한 성별: {{ gender }}</p>
  <p>선택한 반: {{ classname }}</p>
  <div>
    <label for=""> <input type="radio" v-model="gender" value="male" />male</label>
    <label for=""> <input type="radio" v-model="gender" value="female" />female</label>
  </div>
  <div>
    <label for=""> <input type="radio" v-model="classname" value="a" />a</label>
    <label for=""> <input type="radio" v-model="classname" value="b" />b</label>
  </div>
</template>
<style scoped></style> -->
-

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      fruits: [],
    }
  },
}
</script>
<template>
  <p>선택한 과일: {{ fruits }}</p>
  <div>
    <label for=""> <input type="checkbox" v-model="fruits" value="사과" />사과</label>
    <label for=""> <input type="checkbox" v-model="fruits" value="사과" />바나나</label>
    <label for=""> <input type="checkbox" v-model="fruits" value="사과" />오렌디</label>
    <label for=""> <input type="checkbox" v-model="fruits" value="사과" />체리</label>
  </div>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
      fruit: 'banana',
      checked: 'true',
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.fruit)
    },
    changeHandler(e) {
      this.email = e.target.value
    },
  },
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <select v-model="fruit">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <button>전송</button>
    <br />
    <input type="checkbox" v-model="checked" />
    {{ checked }}
  </form> 
  {{ checked }}
  <form @submit.prevent="handleSubmit">
    <label for="">
      <input type="checkbox" v-model="checked" true-value="apple" false-value="" />apple
    </label>
    <label for=""> <input type="checkbox" v-model="checked" />banana </label>
    <label for=""> <input type="checkbox" v-model="checked" />orange </label>
    <label for=""> <input type="checkbox" v-model="checked" />cherry </label>
  </form>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.email)
      console.log(this.password)
    },
    changeHandler(e) {
      this.email = e.target.value
    },
  },
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" name="email" v-model="email" />
    <input type="password" name="email" v-model="password" />
    <button>전송</button>
  </form>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      amount: 0,
    }
  },
  methods: {
    incrementByCount() {
      this.count += 1
    },
    incrementByAmount() {
      this.amount += 1
    },
  },
}
</script>
<template>
  <div v-memo="[count]">
    <h1>count: {{ count }}</h1>
    <button @click="incrementByCount">count</button>
    <h1>count: {{ amount }}</h1>
    <button @click="incrementByAmount">amount</button>
  </div>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    onKeyupHandler(event) {
      console.log(event.keyCode)
      console.log(event.key)

      if (event.keyCode === 13) {
        console.log('Enter!')
      } else {
        console.log(event.target.value)
      }
    },
    onSubmitHandler(event) {},
  },
}
</script>
<template>
  이벤트 수식어(modifier) 이벤트의 처리방식을 제어하는데 사용하는 기능
  <form @submit.prevent="onSubmitHandler">
    <input type="text" @keydown.enter="onKeyupHandler($event)" />
    <input type="text" @keydown.tab="onKeyupHandler($event)" />
    <input type="text" @keydown.up="onKeyupHandler($event)" />
    <button type="submit">전송</button>
  </form>
  <a href="https://www.naver.com" @click.prevent>네이버 바로가기</a>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrement() {
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
  },
}
</script>
<template>
  <h1>app vue</h1>
  <h1>count: {{ count }}</h1>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
  <button @click="incrementByAmount(10)">10 증가</button>
</template>
<style scoped></style> -->
<!-- 
<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    printHello: function (name) {
      console.log(name)
    },
    printHaha: function () {
      console.log('haha')
    },
  },
}
</script>
<template>
  <h1>app vue</h1>
  <button @click="() => printHello('sucoding')">클릭</button>
  <button @click="printHello('handsome')">클릭</button>
</template>
<style scoped></style> -->
