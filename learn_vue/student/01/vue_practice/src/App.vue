<script>
export default {
  name: 'App',
  data() {
    return {
      // Lev 1
      true: true,
      weather: 'sunny', // rainy, cloudy
      vHtml: '<strong>HTML을 출력합니다!</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: true,
      message1: 'sucoding',
      isGreeting: false,
      status: 'loggedin',
      // Lev 2
      status1: 'loading', // "loading", "error", "success", "idle"
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'editor', // "admin", "editor", "viewer"
      status3: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium

      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',

      status4: 'inCart', //"inCart", "purchased", "abandoned"
      items: ['사과', '바나나', '오렌지'],
      items1: { name: '홍길동', age: 25, job: '개발자' },
      items3: ['Apple', 'Banana', 'Orange', 'Grapes'],
      buttons: ['Save', 'Cancel', 'Delete'],
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      fruits: ['Apple', 'Banana', 'Grapes'],
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],

      items2: ['Item 1', 'Item 2', 'Item 3'],

      // Lev 4
      students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 },
      ],
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 },
        { name: '스마트폰', price: 60000 },
      ],
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        {
          name: 'Vegetables',
          items: [
            'Carrot',
            'Broccoli',
            { name: 'Leafy Vegetables', items: ['Spinach', 'Lettuce'] },
          ],
        },
      ],
      tasks: [
        { title: 'Vue 공부하기', completed: false },
        { title: '프로젝트 작업', completed: true },
        { title: '운동하기', completed: false },
      ],
      teamMembers: [
        { name: '홍길동', role: '개발자' },
        { name: '김철수', role: '디자이너' },
        { name: '이영희', role: '개발자' },
        { name: '박지민', role: '기획자' },
      ],
    }
  },
}
</script>
<template>
  <h1>Lev 1</h1>
  <h1 v-if="true">조건이 참입니다!</h1>
  <h1 v-if="weather === 'sunny'">{{ weather }}</h1>
  <h1 v-else-if="weather === 'rainy'">{{ weather }}</h1>
  <h1 v-else>{{ weather }}</h1>
  <h1 v-html="vHtml"></h1>
  <h1 v-text="message"></h1>
  <h1 v-show="isVisible">조건이 참입니다!</h1>
  <h1 v-text="message1"></h1>
  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-if="status === 'loggedin'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else-if="status === 'fail'">비밀번호 오류</h1>
  <h1>-----------------------------------------</h1>
  <h1>Lev 2</h1>
  <h1 v-if="status1 === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status1 === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status1 === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status1 === 'idle'">대기중</h1>
  <h1 v-if="isHtml === true" v-html="htmlContent"></h1>
  <h1 v-else-if="isHtml === false" v-text="plainContent"></h1>
  <h1 v-if="role === 'admin'">관리자 메뉴를 표시</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴를 표시</h1>
  <h1 v-else-if="role === 'viewer'">읽기 전용 메뉴를 표시</h1>
  <h1 v-if="status3 === 'loggedIn' && account === 'basic'">"기본 계정으로 로그인 중"</h1>
  <h1 v-if="selectedOption === 'italic'" v-html="messageHTML"></h1>
  <h1 v-if="status4 === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1>-----------------------------------------</h1>
  <h1>Lev 3</h1>
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ value }}</li>
  </ul>
  <ul>
    <li v-for="(value, key) in items1" :key="key">{{ key }} - {{ value }}</li>
  </ul>
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ index }} - {{ value }}</li>
  </ul>
  <ul>
    <li v-for="(value, index) in items3.filter((item) => item.includes('a'))" :key="index">
      {{ value }}
    </li>
  </ul>
  <button v-for="(value, index) in buttons" :key="index">{{ value }}</button>
  <p v-for="(value, index) in cars" :key="index">{{ value.model }}, {{ value.price }}</p>
  <ul>
    <li v-for="fruit in fruits" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>
  <ul>
    <li v-for="category in categorys" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="item in category.items" :key="item">
          {{ item }}
        </li>
      </ul>
    </li>
  </ul>
  <!-- <span v-for="(value, index) in items2" :key="index">
    <strong v-if="index === 0">{{ value }}</strong>
    <span v-else>{{ value }}</span>
  </span> -->
  <span
    v-for="(value, index) in items2"
    :key="index"
    :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
  >
    {{ value }}
  </span>
  <ul>
    <li v-for="item in items" :key="item">{{ item }} - {{ item.length }}</li>
  </ul>
  <h1>-----------------------------------------</h1>
  <h1>Lev 4</h1>
  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
  <ul>
    <li v-for="product in products.filter((product) => product.price >= 50000)" :key="product">
      {{ product.name }} - {{ product.price }}
    </li>
  </ul>
  <ul>
    <li v-for="category in categories" :key="category.name">
      <span>{{ category.name }}</span>
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          <div v-if="typeof item === 'string'">{{ item }}</div>
          <div v-else>
            <span>{{ item.name }}</span>
            <ul>
              <li v-for="item in item.items" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <ul>
    <li
      v-for="(members, index) in teamMembers.reduce((acc, member) => {
        if (!acc[member.role]) {
          acc[member.role] = []
        }
        acc[member.role].push(member)
        return acc
      }, {})"
      :key="index"
    >
      {{ index }}
      <ul>
        <li v-for="member in members" :key="member">
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
