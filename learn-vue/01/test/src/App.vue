<script>
export default {
  name: 'App',
  data() {
    return {
      // 연습문제 1
      weather: 'sunny', // rainy, cloudy
      html: '<strong>HTML을 출력합니다!</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: false,
      message2: 'sucoding',
      isGreeting: true,
      status: 'loggedIn', // loginRequired, fail

      // 연습문제 2
      status2: 'error', // "loading", "error", "success", "idle"
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin', // "admin", "editor", "viewer"
      /*
      - `"loggedIn"`, `"basic"`: "기본 계정으로 로그인 중"
      - `"loggedIn"`, `"premium"`: "프리미엄 계정으로 로그인 중"
      - `"loggedOut"`: "로그인 필요"
      - `"banned"`: "계정 정지"
      */
      status3: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status4: 'inCart', //"inCart", "purchased", "abandoned"

      // 연습문제 3
      items: ['사과', '바나나', '오렌지'],
      items2: { name: '홍길동', age: 25, job: '개발자' },
      items3: ['Apple', 'Banana', 'Cherry'],
      items4: ['Apple', 'Banana', 'Orange', 'Grapes'],
      items5: ['Save', 'Cancel', 'Delete'],
      items6: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      items7: ['Apple', 'Banana', 'Grapes'],
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      items8: ['Item 1', 'Item 2', 'Item 3'],
      items9: ['Apple', 'Banana', 'Orange'],

      // 연습문제 4
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
  <!-- 연습문제 1 -->
  <h1>-연습문제 1-</h1>
  <!-- 1번 -->
  <h1 v-if="true">조건이 참입니다!</h1>

  <!-- 2번 -->
  <h1 v-if="weather === 'sunny'">sunny</h1>
  <h1 v-else-if="weather === 'rainy'">sunny</h1>
  <h1 v-else>sunny</h1>

  <!-- 3번 -->
  <h1 v-html="html"></h1>

  <!-- 4번 -->
  <h1 v-text="message"></h1>

  <!-- 5번 -->
  <h1 v-show="isVisible">조건이 참입니다!</h1>

  <!-- 6번 -->
  <h1 v-text="message2"></h1>

  <!-- 7번 -->
  <h1 v-if="isGreeting === true">Hello</h1>
  <h1 v-else-if="isGreeting === false">Goodbye</h1>

  <!-- 8번 -->
  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>

  <!-- 연습문제 2 -->
  <h1>-연습문제 2-</h1>
  <!-- 1번 -->
  <h1 v-if="status2 === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status2 === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status2 === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status2 === 'idle'">대기중</h1>

  <!-- 2번 -->
  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>

  <!-- 3번 -->
  <h1 v-if="role === 'admin'">관리자 메뉴입니다.</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴입니다.</h1>
  <h1 v-else-if="role === 'viewer'">읽기전용 메뉴입니다.</h1>

  <!-- 4번 -->
  <h1 v-if="status3 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h1>
  <h1 v-else-if="status3 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h1>
  <h1 v-else-if="status3 === 'loggedOut'">로그인 필요</h1>
  <h1 v-else-if="status3 === 'banned'">계정 정지</h1>

  <!-- 5번 -->
  <h1 v-if="selectedOption === 'bold'" v-html="messageHTML"></h1>
  <h1 v-if="selectedOption === 'italic'" v-html="messageItalic"></h1>

  <!-- 6번 -->
  <h1 v-if="status4 === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status4 === 'purchased'">구매완료</h1>
  <h1 v-else-if="status4 === 'abandoned'">구매가 취소되었습니다.</h1>

  <!-- 연습문제 3 -->
  <h1>-연습문제 3-</h1>
  <!-- 1번 -->
  <ul>
    <li v-for="fruit in items" :key="fruit">
      {{ fruit }}
    </li>
  </ul>

  <!-- 2번 -->
  <ul>
    <li v-for="(value, key) in items2" :key>{{ key }} - {{ value }}</li>
  </ul>

  <!-- 3번 -->
  <ul>
    <li v-for="(fruit, index) in items3" :key="fruit">{{ index }} - {{ fruit }}</li>
  </ul>

  <!-- 4번 -->
  <ul>
    <li v-for="(fruit, index) in items4.filter((items4) => items4.includes('a'))" :key="fruit">
      {{ index }} - {{ fruit }}
    </li>
  </ul>

  <!-- 5번 -->
  <button v-for="text in items5" :key="text">
    {{ text }}
  </button>

  <!-- 6번 -->
  <ul>
    <li v-for="(itemObj, index) in items6" :key="index">
      <span>{{ itemObj.model }}</span>
      <span> - </span>
      <span>{{ itemObj.price }}</span>
    </li>
  </ul>

  <!-- 7번 -->
  <ul>
    <li v-for="fruit in items7" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>

  <!-- 8번 -->
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

  <!-- 9번 -->
  <!-- 두가지 방법 -->
  <ul>
    <li v-for="(item, index) in items8" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li>

    <br />

    <li
      v-for="(item, index) in items8"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ item }}
    </li>
  </ul>

  <!-- 10번 -->
  <ul>
    <li v-for="item in items9" :key="item">{{ item }} // {{ item.length }}</li>
  </ul>

  <!-- 연습문제 4 -->
  <h1>-연습문제 4-</h1>
  <!-- 1번 -->
  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>

  <!-- 2번 -->
  <ul>
    <li v-for="product in products.filter((product) => product.price > 50000)" :key="product.name">
      {{ product.name }} - {{ product.price }}
    </li>
  </ul>

  <!-- 3번 -->
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

  <!-- 4번 -->
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label> <input type="checkbox" :checked="task.completed" /> {{ task.title }} </label>
    </li>
  </ul>

  <!-- 5번 -->
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
