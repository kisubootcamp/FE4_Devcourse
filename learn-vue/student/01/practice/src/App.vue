<script>
export default {
  name: 'App',
  data() {
    return {
      // Level1
      option: true,
      weather: 'sunny', // rainy, cloudy
      html: '<strong>HTML을 출력합니다!</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: false,
      message2: 'sucoding',
      isGreeting: true,
      status: 'fail', // loggedIn, loginRequired, fail

      // Level2
      // 1
      status2: 'error', // "loading", "error", "success", "idle"
      // 2
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      // 3
      role: 'viewer', // "admin", "editor", "viewer"
      // 4
      status3: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'premium', // basic, premium
      // 5
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      // 6
      status4: 'abandoned', //"inCart", "purchased", "abandoned"

      // Level3
      // 1
      items: ['사과', '바나나', '오렌지'],
      // 2
      items2: { name: '홍길동', age: 25, job: '개발자' },
      // 3
      items3: ['Apple', 'Banana', 'Cherry'],
      // 4
      items4: ['Apple', 'Banana', 'Orange', 'Grapes'],
      // 5
      items5: ['Save', 'Cancel', 'Delete'],
      // 6
      items6: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      // 7
      items7: ['Apple', 'Banana', 'Grapes'],
      // 8
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      // 9
      items9: ['Item 1', 'Item 2', 'Item 3'],
      // 10
      items10: ['Apple', 'Banana', 'Orange'],

      // Level4
      // 1
      students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 },
      ],
      // 2
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 },
        { name: '스마트폰', price: 60000 },
      ],
      // 3
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
      // 4
      tasks: [
        { title: 'Vue 공부하기', completed: false },
        { title: '프로젝트 작업', completed: true },
        { title: '운동하기', completed: false },
      ],
      // 5
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
  <h1>Level.1</h1>
  <!-- 1 -->
  <p v-if="option">조건이 참입니다!</p>
  <!-- 2 -->
  <p v-if="weather === 'sunny'">맑음</p>
  <p v-if="weather === 'rainy'">비</p>
  <p v-if="weather === 'cloudy'">구름</p>
  <!-- 3 -->
  <p v-html="html"></p>
  <!-- 4 -->
  <p v-text="message"></p>
  <!-- 5 -->
  <p v-show="!isVisible">조건이 참일 때만 출력합니다.</p>
  <!-- 6 -->
  <p v-text="message2"></p>
  <!-- 7 -->
  <p v-if="isGreeting === true">Hello</p>
  <p v-else>Goodbye</p>
  <!-- 8 -->
  <p v-if="status === 'loggedIn'">로그인 중</p>
  <p v-else-if="status === 'loginRequired'">로그인 필요</p>
  <p v-else-if="status === 'fail'">비밀번호 오류</p>

  <h1>Level.2</h1>
  <!-- 1 -->
  <p v-if="status2 === 'loading'">데이터를 로딩 중입니다...</p>
  <p v-else-if="status2 === 'error'">에러가 발생했습니다.</p>
  <p v-else-if="status2 === 'success'">데이터 로딩 완료!</p>
  <p v-else-if="status2 === 'idle'">대기중</p>

  <!-- 2 -->
  <p v-if="isHtml === true" v-html="htmlContent"></p>
  <p v-else v-text="plainContent"></p>

  <!-- 3 -->
  <p v-if="role === 'admin'">관리자 메뉴를 표시</p>
  <p v-else-if="role === 'editor'">편집자 메뉴를 표시</p>
  <p v-else>읽기 전용 메뉴를 표시</p>

  <!-- 4 -->
  <p v-if="status3 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</p>
  <p v-else-if="status3 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</p>
  <p v-else-if="status3 === 'loggedOut'">로그인 필요</p>
  <p v-else>계정 정지</p>

  <!-- 5 -->
  <p v-if="selectedOption === 'bold'" v-html="messageHTML"></p>
  <p v-else-if="selectedOption === 'italic'" v-html="messageItalic"></p>

  <!-- 6 -->
  <p v-if="status4 === 'inCart'">장바구니에 상품이 있습니다.</p>
  <p v-else-if="status4 === 'purchased'">구매 완료</p>
  <p v-else-if="status4 === 'abandoned'">구매가 취소되었습니다.</p>

  <h1>Level.3</h1>
  <!-- 1 -->
  <ul>
    <li v-for="(value, index) in items" :key="index">{{ value }}</li>
  </ul>
  <!-- 2 -->
  <ul>
    <li v-for="(value, key) in items2" :key="key">[{{ key }}] - {{ value }}</li>
  </ul>
  <!-- 3 -->
  <ul>
    <li v-for="(value, index) in items3" :key="value">{{ index }} - {{ value }}</li>
  </ul>
  <!-- 4 -->
  <ul>
    <template v-for="(value, index) in items4.filter((item) => item.includes('a'))" :key="value">
      <li>{{ index }} - {{ value }}</li>
    </template>
  </ul>
  <!-- 5 -->
  <div>
    <button v-for="value in items5" :key="value">{{ value }}</button>
  </div>
  <!-- 6 -->
  <ul>
    <li v-for="value in items6" :key="value">
      <span v-for="(value2, key) in value" :key="value2"> {{ key }} : {{ value2 }} /</span>
    </li>
  </ul>
  <!-- 7 -->
  <ul>
    <li v-for="value in items7" :key="value">
      <span v-if="value === 'Apple'" style="color: red">{{ value }}</span>
      <span v-else-if="value === 'Banana'" style="color: yellow">{{ value }}</span>
      <span v-else-if="value === 'Grapes'" style="color: purple">{{ value }}</span>
    </li>
  </ul>
  <ul>
    <li v-for="value in items7" :class="value" :key="value">{{ value }}</li>
  </ul>
  <!-- 8 -->
  <ul>
    <li v-for="value in categorys" :key="value">
      {{ value.name }}
      <ul>
        <li v-for="item in value.items" :key="item">{{ item }}</li>
      </ul>
    </li>
  </ul>
  <!-- 9 -->
  <ul>
    <li v-for="(item, index) in items9" :key="item">
      <span v-if="index === 0"
        ><b>{{ item }}</b></span
      >
      <span v-else>{{ item }}</span>
    </li>
  </ul>
  <!-- 10 -->
  <ul>
    <li v-for="item in items10" :key="item">{{ item }}, {{ item.length }}</li>
  </ul>

  <h1>Level.4</h1>
  <!-- 1 -->
  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }} {{ student.age }}
    </li>
  </ul>
  <!-- 2 -->
  <ul>
    <li v-for="product in products.filter((f) => f.price >= 50000)" :key="product.name">
      {{ product.name }} {{ product.price }}
    </li>
  </ul>
  <!-- 3 -->
  <ul>
    <li v-for="category in categories" :key="category.name">
      {{ category.name }}
      <ul>
        <template v-for="(item, index) in category.items" :key="index">
          <li v-if="typeof item === 'string'">{{ item }}</li>
          <ul v-else-if="typeof item === 'object'">
            <li v-for="it in item.items" :key="it">{{ it }}</li>
          </ul>
        </template>
      </ul>
    </li>
  </ul>
  <!-- 4 -->
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <label :for="task.name"
        ><input type="checkbox" :id="task.name" :checked="task.completed" />{{ task.title }}</label
      >
    </li>
  </ul>
  <!-- 5 -->
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
<style scoped>
.Apple {
  color: red;
}
.Banana {
  color: yellow;
}
.Grapes {
  color: purple;
}
</style>
