<script>
// Options API(2.x) / Composition API(3.x)
// 리액트와 비교한다면, 클래스 컴포넌트 / 함수형 컴포넌트

// Options API
// 약속된 객체의 속성
// -- data (뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속성)

// 디렉티브
// : v-text
// : v-html
// : v-pre
// : v-bind (축약형 -> :)
// : v-if(v-else-if, v-else) (조건부 렌더링을 위한 디렉티브)
// : v-show
// : v-for
export default {
  data() {
    return {
      // 연습문제 Lv1
      isShow: true,
      weather: 'sunny', // rainy, cloudy
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: true,
      message2: 'sucoding',
      isGreeting: false,
      status: 'loggedIn', // loginRequired, fail

      // 연습문제 Lv2
      status2: 'error', // "loading", "success", "idle"
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin', // "editor", "viewer"
      status3: 'loggedIn', // "loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium
      selectedOption: 'italic', // 'bold', 'italic'
      messageBold: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status4: 'inCart', // "inCart", "purchased", "abandoned"

      // 연습문제 Lv3
      items: ['사과', '바나나', '오렌지'],
      person: { name: '홍길동', age: 25, job: '개발자' },
      items2: ['Apple', 'Banana', 'Cherry'],
      fruits: ['Apple', 'Banana', 'Orange', 'Grapes'],
      buttons: ['Save', 'Cancel', 'Delete'],
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      fruits2: ['Apple', 'Banana', 'Grapes'],
      categories: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      items3: ['Item 1', 'Item 2', 'Item 3'],
      items4: ['Apple', 'Banana', 'Orange'],

      // 연습문제 Lv4
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
      categories2: [
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
  <!-- 연습문제 Lv1 -->
  <h1 v-if="isShow">조건이 참입니다!</h1>

  <h1 v-if="weather === 'sunny'">맑음</h1>
  <h1 v-else-if="weather === 'rainy'">비</h1>
  <h1 v-else>구름</h1>

  <h1 v-html="message"></h1>

  <h1 v-text="message"></h1>

  <h1 v-show="isVisible">조건이 참입니다!</h1>

  <h1 v-text="message2"></h1>

  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-if="!isGreeting">Goodbye</h1>

  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>

  <!-- 연습문제 Lv2 -->
  <h1 v-if="status2 === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status2 === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status2 === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status2 === 'idle'">대기중</h1>

  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>

  <h1 v-if="role === 'admin'">관리자 메뉴를 표시</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴를 표시</h1>
  <h1 v-else-if="role === 'viewer'">읽기 전용 메뉴를 표시</h1>

  <h1 v-if="status3 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h1>
  <h1 v-else-if="status3 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h1>
  <h1 v-else-if="status3 === 'loggedOut'">로그인 필요</h1>
  <h1 v-else-if="status3 === 'banned'">계정 정지</h1>

  <h1 v-if="selectedOption === 'bold'" v-html="messageBold"></h1>
  <h1 v-else-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
  <h1 v-else></h1>

  <h1 v-if="status4 === 'inCart'">장바구니에 상품이 있습니다</h1>
  <h1 v-else-if="status4 === 'purchased'">구매 완료</h1>
  <h1 v-else-if="status4 === 'abandoned'">구매가 취소되었습니다</h1>

  <!-- 연습문제 Lv3 -->
  <ul>
    <li v-for="value in items" :key="value">
      {{ value }}
    </li>
  </ul>

  <ul>
    <li v-for="(value, key) in person" :key>{{ key }} : {{ value }}</li>
  </ul>

  <ul>
    <li v-for="(value, index) in items2" :key="index">{{ index }} : {{ value }}</li>
  </ul>

  <ul>
    <li v-for="fruit in fruits.filter((item) => item.includes('a'))" :key="fruit">
      {{ fruit }}
    </li>
  </ul>

  <button v-for="value in buttons" :key="value">{{ value }}</button>

  <ul>
    <li v-for="(car, index) in cars" :key="index">{{ car.model }} : {{ car.price }}</li>
  </ul>

  <ul>
    <li v-for="fruit in fruits2" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">
        {{ fruit }}
      </span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>

  <ul>
    <li v-for="category in categories" :key="category.name">
      {{ category.name }}
      <ul>
        <li v-for="item in category.items" :key="item">{{ item }}</li>
      </ul>
    </li>
  </ul>

  <ul>
    <!-- <li v-for="(item, index) in items3" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li> -->
    <li
      v-for="(item, index) in items3"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ item }}
    </li>
  </ul>

  <ul>
    <li v-for="item in items4" :key="item">{{ item }} : {{ item.length }}</li>
  </ul>

  <!-- 연습문제 Lv4 -->
  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }} : {{ student.age }}
    </li>
  </ul>

  <ul>
    <li v-for="product in products.filter((product) => product.price >= 50000)" :key="product.name">
      {{ product.name }} : {{ product.price }}
    </li>
  </ul>

  <ul>
    <li v-for="category in categories2" :key="category.name">
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
    <li v-for="task in tasks" :key="task.title">
      <label> <input type="checkbox" :checked="task.completed" /> {{ task.title }} </label>
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
