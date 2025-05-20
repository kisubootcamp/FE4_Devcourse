<script>
export default {
  name: 'App',
  data() {
    return {
      true: true,
      weather: 'sunny',
      data: '<strong>HTML을 출력합니다!</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: false,
      message2: 'sucoding',
      isGreeting: true,
      // status: 'loggedIn',
      // status: 'error',
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin',

      // status: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'premium', // basic, premium

      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',

      status: 'inCart', //"inCart", "purchased", "abandoned"

      items: ['사과', '바나나', '오렌지'],

      person: { name: '홍길동', age: 25, job: '개발자' },

      fruits: ['Apple', 'Banana', 'Cherry'],

      fruits2: ['Apple', 'Banana', 'Orange', 'Grapes'],

      buttons: ['Save', 'Cancel', 'Delete'],

      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],

      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],

      styleItems: ['Item 1', 'Item 2', 'Item 3'],

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
  <!-- level1 -->
  <div class="level1_1">
    <h2 v-if="true">조건이 참입니다!</h2>
  </div>

  <div class="level1_2">
    <h2 v-if="weather === 'sunny'">해가쨍쨍</h2>
    <h2 v-else-if="weather === 'rainy'">비가와요</h2>
    <h2 v-else>구름이많아요요</h2>
  </div>

  <div class="level1_3">
    <h2 v-html="data"></h2>
  </div>

  <div class="level1_4">
    <h2 v-text="message"></h2>
  </div>

  <div class="level1_5">
    <h2 v-show="isVisible">조건이 참입니다!</h2>
  </div>

  <div class="level1_6">
    <h2 v-text="message2"></h2>
  </div>

  <div class="level1_7">
    <h2 v-if="isGreeting">Hello</h2>
    <h2 v-else>Goodbye</h2>
  </div>

  <div class="level1_8">
    <h2 v-if="status === 'loggedIn'">로그인중</h2>
    <h2 v-else-if="status === 'loginRequired'">로그인 필요</h2>
    <h2 v-else>비밀번호 오류</h2>
  </div>

  <!-- level2 -->
  <div class="level2_1">
    <h1 v-if="status === 'loading'">데이터를 로딩 중입니다...</h1>
    <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
    <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
    <h1 v-else-if="status === 'idle'">대기중</h1>
  </div>

  <div class="level2_2">
    <!-- <div v-if="isHtml === true">
      <h2 v-text="htmlContent"></h2>
    </div>
    <div v-if="isHtml === false">
      <h2 v-html="plainContent"></h2>
    </div>
     -->
    <h1 v-if="isHtml" v-html="htmlContent"></h1>
    <h1 v-else v-text="plainContent"></h1>
  </div>

  <div class="level2_3">
    <h2 v-if="role === 'admin'">관리자 메뉴를 표시</h2>
    <h2 v-else-if="role === 'editor'">편집자 메뉴를 표시</h2>
    <h2 v-else>읽기 전용 메뉴를 표시</h2>
  </div>

  <div class="level2_4">
    <!-- <div v-if="status === 'loggedIn'">
      <h2 v-if="account === 'basic'">기본 계정으로 로그인 중</h2>
      <h2 v-else>프리미엄 계정으로 로그인 중</h2>
    </div>
    <div v-else-if="status === 'loggedOut'">
      <h2>로그인 필요</h2>
    </div>
    <h2 v-else>계정 정지</h2> -->
    <div v-if="status === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</div>
    <div v-else-if="status === 'loggedIn' && account === 'premium'">
      프리미엄 계정으로 로그인 중
    </div>
    <div v-else-if="status === 'loggedOut'">로그인 필요</div>
    <div v-else-if="status === 'banned'">계정 정지</div>
  </div>

  <div class="level2_5">
    <!-- <div v-if="selectedOption === 'italic'">
      <h2 v-html="messageItalic"></h2>
    </div>
    <div v-else>
      <h2 v-text="messageHTML"></h2>
    </div> -->
    <div v-if="selectedOption === 'bold'" v-html="messageHTML"></div>
    <div v-if="selectedOption === 'italic'" v-html="messageItalic"></div>
  </div>

  <div class="level2_6">
    <h2 v-if="status === 'inCart'">장바구니에 상품이 있습니다.</h2>
    <h2 v-else-if="status === 'purchased'">구매완료</h2>
    <h2 v-else>구매가 취소되었습니다</h2>
  </div>

  <!-- level3 -->
  <div class="level3_1">
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>

  <div class="level3_2">
    <ul>
      <li v-for="(value, key) in person" :key>{{ key }} - {{ value }}</li>
    </ul>
  </div>

  <div class="level3_3">
    <ul>
      <li v-for="(value, key) in items" :key>key:{{ key }} - value: {{ value }}</li>
    </ul>
  </div>

  <div class="level3_4">
    <ul>
      <li v-for="fruit in fruits2.filter((fruit) => fruit.includes('a'))" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>

  <div class="level3_5">
    <ul>
      <li v-for="(value, index) in buttons" :key="index">{{ value }}</li>
    </ul>
  </div>

  <div class="level3_6">
    <ul>
      <li v-for="(itemObj, index) in cars" :key="index">
        <span>{{ itemObj.model }}</span>
        <span> - </span>
        <span>{{ itemObj.price }}</span>
      </li>
    </ul>
  </div>

  <div class="level3_7">
    <ul>
      <li v-for="fruit in fruits" :key="fruit">
        <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
        <span v-else style="color: green">{{ fruit }}</span>
      </li>
    </ul>
  </div>

  <div class="level3_8">
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
  </div>

  <div class="level3_9">
    <ul>
      <!-- <li v-for="(item, index) in items" :key="index">
      <strong v-if="index === 0">{{ item }}</strong>
      <span v-else>{{ item }}</span>
    </li> -->
      <li
        v-for="(item, index) in styleItems"
        :key="index"
        :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
      >
        {{ item }}
      </li>
    </ul>
  </div>

  <div class="level3_10">
    <ul>
      <li v-for="item in fruits" :key="item">{{ item }} // {{ item.length }}</li>
    </ul>
  </div>

  <!-- level4 -->
  <div class="level4_1">
    <ul>
      <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
        {{ student.name }} - {{ student.age }}
      </li>
    </ul>
  </div>

  <div class="level4_2">
    <ul>
      <li
        v-for="product in products.filter((product) => product.price > 50000)"
        :key="product.name"
      >
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>

  <div class="level4_3">
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
  </div>

  <div class="level4_4">
    <ul>
      <li v-for="task in tasks" :key="task.title">
        <label> <input type="checkbox" :checked="task.completed" /> {{ task.title }} </label>
      </li>
    </ul>
  </div>

  <div class="level4_5">
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
  </div>
</template>
<style scoped></style>
