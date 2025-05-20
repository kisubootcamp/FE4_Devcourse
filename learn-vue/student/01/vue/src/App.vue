<script>
// Options API(2.x) / Composition API(3.x)
// 클래스 컴포넌트      / 함수형 컴포넌트
// 약속된 객체의 속성
// -- data
// 디렉티브
// - v-text
// - v-html
// - v-pre : 컴파일의 대상으로 삼지 않음
// - v-bind
// 축약형(기존 디렉티브를 줄여서 쓸 수 있는 문법) v-bind를 빼고 :만 사용
// - v-if
// - v-show
// - v-show
// - v-for
export default {
  name: 'App',

  data() {
    return {
      result: true,
      weather: 'cloudy',
      htmlText: '<strong>HTML을 출력합니다.</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: true,
      text: 'sucoding',
      isGreeting: false,
      status: '',
      status2: 'error',
      isHTML: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'viewer',
      status3: 'loggedIn',
      account: 'basic',
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status4: 'abandoned',
      items: ['사과', '바나나', '오렌지'],
      items2: { name: '홍길동', age: 25, job: '개발자' },
      items3: ['Apple', 'Banana', 'Cherry'],
      items4: ['Apple', 'Banana', 'Orange', 'Grapes'],
      buttons: ['Save', 'Cancel', 'Delete'],
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
      friuts: ['Apple', 'Banana', 'Grapes'],
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
      itemsArr: ['Item 1', 'Item 2', 'Item 3'],
      item5: ['Apple', 'Banana', 'Orange'],
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
  <h1 v-if="result">조건이 참입니다!</h1>
  <h1 v-if="weather === 'sunny'">맑음입니다.</h1>
  <h1 v-else-if="weather === 'rainy'">비가옵니다.</h1>
  <h1 v-else-if="weather === 'cloudy'">흐림입니다.</h1>
  <h1 v-else>천둥번개입니다.</h1>
  <h1 v-html="htmlText"></h1>
  <h1>{{ message }}</h1>
  <h1 v-text="message"></h1>
  <h1 v-show="isVisible">Hello World!</h1>
  <h1 v-text="text"></h1>
  <h1 v-if="isGreeting === true">Hello</h1>
  <h1 v-else>GoodBye</h1>
  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
  <h2 v-if="status2 === 'loading'">데이터를 로딩중입니다...</h2>
  <h2 v-else-if="status2 === 'error'">에러발생</h2>
  <h2 v-else-if="status2 === 'success'">데이터 로딩 완료!</h2>
  <h2 v-else-if="status === 'idle'">대기중</h2>
  <h2 v-if="isHTML" v-html="htmlContent"></h2>
  <h2 v-else>{{ plainContent }}</h2>
  <h2 v-if="role === 'admin'">관리자</h2>
  <h2 v-else-if="role === 'editor'">편집자</h2>
  <h2 v-else-if="role === 'viewer'">읽기전용</h2>
  <h2 v-if="status3 === 'loggedIn' && account === 'basic'">기본계정으로 로그인 중</h2>
  <h2 v-else-if="status3 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h2>
  <h2 v-else-if="status3 === 'loggedOut'">로그인 필요</h2>
  <h2 v-else-if="status3 === 'banned'">계정 정지</h2>
  <h2 v-if="selectedOption === 'bold'" v-html="messageHTML"></h2>
  <h2 v-if="selectedOption === 'italic'" v-html="messageItalic"></h2>
  <h2 v-if="status4 === 'inCart'">장바구니에 상품이 있습니다.</h2>
  <h2 v-else-if="status4 === 'purchased'">구매완료</h2>
  <h2 v-else-if="status4 === 'abandoned'">구매가 취소되었습니다.</h2>

  <ul>
    <li v-for="friuts in items" :key="friuts">
      {{ friuts }}
    </li>
  </ul>
  <ul>
    <li v-for="(value, key) in items2" :key="key">{{ key }} : {{ value }}</li>
  </ul>
  <ul>
    <li v-for="(friut, index) in items3" :key="friut.name">{{ friut }} - {{ index }}</li>
  </ul>
  <ul>
    <li v-for="item in items4.filter((item) => item.includes('a'))" :key="item">{{ item }}</li>
  </ul>
  <button v-for="button in buttons" :key="button.name">{{ button }}</button>
  <ul>
    <li v-for="car in cars" :key="car.model">{{ car.model }} - {{ car.price }}</li>
  </ul>
  <ul>
    <li v-for="friut in friuts" :key="friut">
      <span v-if="friut === 'Apple'" style="color: red">{{ friut }}</span>
      <span v-else style="color: forestgreen">{{ friut }}</span>
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
  <ul>
    <!-- <li v-for="(item, index) in itemsArr" :key="index">
      <span v-if="index === 0" style="font-weight: bold">{{ item }}</span>
      <span v-else>{{ item }}</span>
    </li> -->
    <li
      v-for="(item, index) in itemsArr"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="item in item5" :key="item">{{ item }} // {{ item.length }}</li>
  </ul>
  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
  <ul>
    <li v-for="product in products.filter((product) => product.price >= 50000)" :key="product.name">
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
            <span>
              {{ item.name }}
            </span>
            <ul>
              <li v-for="item in item.items" :key="item">{{ item }}</li>
            </ul>
          </div>
          <ul></ul>
        </li>
      </ul>
    </li>
  </ul>
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <input type="checkbox" :checked="task.completed" />{{ task.title }}
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
<style scoped></style>
