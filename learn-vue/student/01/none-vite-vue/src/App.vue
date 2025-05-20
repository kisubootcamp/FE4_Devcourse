<script>
export default {
  data() {
    return {
      isVisible: true,
      weather: 'sunny', // rainy, cloudy
      htmlString: '<strong>HTML을 출력합니다!</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      message2: 'eunseo',
      selectedOption: 'italic',
      messageHTML: '<strong>안녕</strong>',
      status: 'inCart', //"inCart", "purchased", "abandoned"
      items: { name: '홍길동', age: 25, job: '개발자' },
      items2: ['Apple', 'Banana', 'Cherry'],
      items3: ['Apple', 'Banana', 'Orange', 'Grapes'],
      isVisible2: true,
      isGreeting: true,
      status2: 'loggedIn', // loginRequired, fail
      status3: 'error', // "loading", "error", "success", "idle"

      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin', // "admin", "editor", "viewer"

      status4: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium

      selectedOption2: 'italic', // 'bold'. 'italic'
      messageHTML2: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status5: 'inCart', //"inCart", "purchased", "abandoned"

      items6: ['사과', '바나나', '오렌지'],
      items7: { name: '홍길동', age: 25, job: '개발자' },

      items8: ['Apple', 'Banana', 'Cherry'],

      items9: ['Apple', 'Banana', 'Orange', 'Grapes'],

      items10: ['Save', 'Cancel', 'Delete'],

      items5: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],

      items11: ['Apple', 'Banana', 'Grapes'],

      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],

      items12: ['Item 1', 'Item 2', 'Item 3'],

      items13: ['Apple', 'Banana', 'Orange'],

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
  <!-- 연습 문제 1 -->
  <h1 v-if="true">조건이 참입니다!</h1>
  <h1 v-if="weather === 'sunny'">화창~</h1>
  <div v-html="htmlString"></div>
  <h2 v-text="message"></h2>
  <h1 v-show="isVisible2">이게 참일때만 보여야 합니다!!</h1>
  <h1 v-text="message2"></h1>
  <p v-if="isGreeting === true">Hello</p>
  <p v-if="isGreeting === false">Goob Bye</p>
  <div>
    <p v-if="status2 === 'loggedIn'">로그인 중</p>
    <p v-else-if="status2 === 'need'">로그인 필요</p>
    <p v-else>비밀번호 오류</p>
  </div>

  <!-- 연습 문제 2 -->
  <div>
    <p v-if="status3 === 'loading'">데이터 로딩 중 ...</p>
    <p v-else-if="status3 === 'error'">에러가 발생함</p>
    <p v-else-if="status3 === 'success'">데이터 로드 완료!</p>
    <p v-else>대기중</p>
  </div>

  <div>
    <p v-if="isHtml" v-html="htmlContent"></p>
    <p v-else v-text="plainContent"></p>
  </div>

  <div>
    <p v-if="role === 'admin'">관리자 메뉴입니다.</p>
    <p v-else-if="role === 'editor'">편집자 메뉴입니다.</p>
    <p v-else-if="role === 'viewer'">읽기 전용 메뉴입니다.</p>
  </div>

  <div>
    <p v-if="status4 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중.</p>
    <p v-if="status4 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중.</p>
    <p v-if="status4 === 'loggedOut'">로그인 필요</p>
    <p v-if="status4 === 'banned'">계정 정지</p>
  </div>

  <div>
    <p v-if="selectedOption2 === 'bold'" v-html="messageHTML2"></p>
    <p v-if="selectedOption2 === 'italic'" v-html="messageItalic"></p>
  </div>

  <div>
    <p v-if="status5 === 'inCart'">장바구니에 있음</p>
    <p v-else-if="status5 === 'purchased'">구매 완료</p>
    <p v-else-if="status5 === 'abandoned'">구매가 취소되었습니다.</p>
  </div>

  <!-- 연습문제 3 -->
  <ul>
    <li v-for="elem in items6" :key="elem">
      {{ elem }}
    </li>
  </ul>

  <ul>
    <li v-for="(fruit, index) in items2" :key="fruit">{{ index }} : {{ fruit }}</li>
  </ul>
  <ul>
    <li v-for="(item, index) in items3.filter((item) => item.includes('a'))" :key="index">
      {{ item }}
    </li>
  </ul>

  <ul>
    <li v-for="(value, key) in items7" :key>{{ key }} : {{ value }}</li>
  </ul>

  <ul>
    <li v-for="(value, index) in items8" :key="value">{{ index }} : {{ value }}</li>
  </ul>

  <ul>
    <li v-for="i in items9.filter((i) => i.includes('a'))" :key="i">{{ i }}</li>
  </ul>

  <ul>
    <li v-for="v in items10" :key="v">{{ v }}</li>
  </ul>

  <ul>
    <li v-for="(elem, index) in items5" :key="index">
      <span>{{ elem.model }}</span>
      <span>-</span>
      <span>{{ elem.price }}</span>
    </li>
  </ul>

  <ul>
    <li v-for="(elem, index) in items11" :key="index">
      <span v-if="elem === 'Apple'" style="color: red">{{ elem }}</span>
      <span v-else style="color: green">{{ elem }}</span>
    </li>
  </ul>

  <ul>
    <li v-for="c in categorys" :key="c.name">
      {{ c.name }}
      <ul>
        <li v-for="i in c.items" :key="i">{{ i }}</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li v-for="(v, i) in items12" :key="i" :style="{ fontWeight: i === 0 ? 'bold' : 'normal' }">
      {{ v }}
    </li>
  </ul>

  <ul>
    <li v-for="item in items13" :key="item">{{ item }} : {{ item.length }}</li>
  </ul>

  <!-- 연습 문제 4 -->

  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }} : {{ student.age }}
    </li>
  </ul>

  <ul>
    <li v-for="prod in products.filter((prod) => prod.price > 50000)" :key="prod.name">
      {{ prod.name }} : {{ prod.price }}
    </li>
  </ul>

  <ul>
    <li v-for="category in categories" :key="category.name">
      <span>{{ category.name }}</span>
      <ul>
        <li v-for="(item, index) in category.items" :key="index">
          <span v-if="typeof item === 'string'">{{ item }}</span>
          <div v-else>
            <span>{{ item.name }}</span>
            <ul>
              <li v-for="(i, index) in item.items" :key="index">{{ i }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>

  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label>
        <input type="checkbox" :checked="task.completed" />
        {{ task.title }}</label
      >
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
        <li v-for="member in members" :key="member">{{ member.name }}</li>
      </ul>
    </li>
  </ul>
</template>
