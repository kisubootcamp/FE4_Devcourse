<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      wether: 'sunny', // rainy, cloudy
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: true,
      message2: 'sucoding',
      isGreeting: true,
      status: 'loggedIn', // loginRequired, fail
      status2: 'error', // "loading", "error", "success", "idle"
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin', // "admin", "editor", "viewer"
      status3: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status4: 'inCart', //"inCart", "purchased", "abandoned"
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
  <!-- Level 1 -->
  <h1>Level 1</h1>
  <!-- 1. 조건부 렌더링 (v-if) -->
  <!-- "조건이 참입니다!"라는 텍스트가 화면에 나타나게 해주세요. -->
  <p v-if="isShow">조건이 참입니다!</p>

  <!-- 2. 조건부 렌더링 (v-else-if, v-else) -->
  <!-- v-if, v-else-if, v-else를 사용하여 날씨에 따라 다른 메시지를 출력하세요. 예를 들어, sunny, rainy, cloudy라는 세 가지 날씨 상태에 대해 각각 다른 메시지를 출력합니다. -->
  <p v-if="wether === 'sunny'">날씨가 맑습니다.</p>
  <p v-else-if="wether === 'rainy'">날씨가 비가옵니다.</p>
  <p v-else>날씨가 흐립니다.</p>

  <!-- 3. HTML 렌더링 (v-html) -->
  <!-- v-html을 사용하여 HTML 문자열을 렌더링하세요. data 속성에 <strong>HTML을 출력합니다!</strong>라는 문자열을 넣고, 이를 화면에 출력합니다. -->
  <p v-html="message"></p>

  <!-- 4. 텍스트 출력 (v-text) -->
  <!-- message라는 변수에 저장된 값을 v-text로 화면에 출력하도록 하세요. -->
  <p v-text="message"></p>

  <!-- 5. 조건부 렌더링 (v-show) -->
  <!-- v-show를 사용하여 isVisible의 true/false에 따라서, true일 때만 "조건이 참입니다!"라는 텍스트가 보이도록 작성해주세요. -->
  <p v-show="isVisible">조건이 참입니다.</p>

  <!-- 6. 빈 문자열로 텍스트 변경 (v-text) -->
  <!-- v-text를 사용하여 message라는 data 속성에  문자열을 할당해서 출력해주세요. -->
  <p v-text="message2"></p>

  <!-- 7. 동적 조건부 렌더링 (v-if와 v-else) -->
  <!-- v-if와 v-else를 사용하여 "Hello"와 "Goodbye"라는 메시지를 보여주세요. isGreeting이 true일 때 "Hello", false일 때 "Goodbye"가 보이도록 하세요. -->
  <p v-if="isGreeting">Hello</p>
  <p v-else>Goodbye</p>

  <!-- 8. 여러 조건을 가진 v-if와 v-else-if -->
  <!-- v-if, v-else-if, v-else를 사용하여 "로그인 중", "로그인 필요", "비밀번호 오류" 상태에 따른 메시지를 출력하세요. 상태를 변경하여 각각의 메시지가 출력되도록 하세요. -->
  <p v-if="status === 'loggedIn'">로그인 중</p>
  <p v-else-if="status === 'loginRequired'">로그인 필요</p>
  <p v-else>비밀번호 오류</p>

  <!-- Level 2 -->
  <h1>Level 2</h1>
  <!-- 1. 다중 조건부 렌더링 (v-if, v-else-if, v-else) -->
  <!-- 사용자에게 다양한 상태를 보여주는 컴포넌트를 만드세요. 상태는 "loading", "error", "success", "idle"입니다. 각각의 상태에 맞는 메시지를 보여주는 조건부 렌더링을 구현하세요. -->
  <p v-if="status2 === 'loading'">데이터를 로딩 중입니다...</p>
  <p v-else-if="status2 === 'error'">에러가 발생했습니다.</p>
  <p v-else-if="status2 === 'success'">데이터 로딩 완료!</p>
  <p v-else-if="status2 === 'idle'">대기중</p>

  <!-- 2. HTML 텍스트와 조건부 렌더링 혼합 (v-html, v-text) -->
  <!-- 사용자에게 특정 조건에 따라 HTML과 텍스트를 동적으로 출력하는 컴포넌트를 만드세요. 예를 들어, isHtml이 true일 때는 HTML 형식으로 텍스트를, false일 때는 순수 텍스트를 출력합니다. -->
  <p v-if="isHtml" v-html="htmlContent"></p>
  <p v-else v-text="plainContent"></p>

  <!-- 3. 다중 상태에 따른 렌더링 (v-if, v-else-if) -->
  <!-- 사용자 권한에 따라 서로 다른 메뉴를 보여주는 컴포넌트를 만드세요. 권한은 "admin", "editor", "viewer"로 주어지며, 각 권한에 맞는 메뉴를 다르게 출력합니다. -->
  <p v-if="role === 'admin'">관리자 메뉴</p>
  <p v-else-if="role === 'editor'">편집자 메뉴</p>
  <p v-else-if="role === 'viewer'">읽기전용 메뉴</p>

  <!-- 4. 복잡한 다중 조건부 렌더링 (v-if, v-else-if) -->
  <!-- 사용자에게 로그인 상태와 계정 종류에 따라 서로 다른 메시지를 출력합니다. 상태는 "loggedIn", "loggedOut", "banned"가 있으며, 각 상태에 맞는 메시지를 출력합니다. 계정 종류는 "basic", "premium"으로 구분됩니다. -->
  <p v-if="status3 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</p>
  <p v-else-if="status3 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</p>
  <p v-else-if="status3 === 'loggedOut'">로그인 필요</p>
  <p v-else-if="status3 === 'banned'">계정 정지</p>

  <!-- 5. HTML로 출력되는 동적 텍스트와 조건부 렌더링 (v-html) -->
  <!-- 사용자가 선택한 옵션에 따라 다르게 HTML 텍스트를 출력하세요. selectedOption이 "bold"이면 텍스트는 <strong>텍스트</strong>를 출력하게 하고 "italic"이면 <em>텍스트</em>를 출력하게 하고, 그 외에는 일반 텍스트로 표시됩니다. -->
  <p v-if="selectedOption === 'bold'" v-html="messageHTML"></p>
  <p v-if="selectedOption === 'italic'" v-html="messageItalic"></p>

  <!-- 6. 복잡한 상태 관리와 v-if, v-else-if 사용 -->
  <!-- 사용자의 구매 내역에 따라 다르게 보여주는 메시지를 출력하세요. 구매 상태는 "inCart", "purchased", "abandoned"이며, 각 상태에 맞는 메시지를 출력합니다. -->
  <p v-if="status4 === 'inCart'">장바구니에 상품이 있습니다.</p>
  <p v-else-if="status4 === 'purchased'">구매 완료</p>
  <p v-else-if="status4 === 'abandoned'">구매가 취소되었습니다.</p>

  <!-- Level 3 -->
  <h1>Level 3</h1>
  <!-- 1. items 배열을 출력하기 -->
  <!-- items = ['사과', '바나나', '오렌지']를 v-for를 사용하여 출력하세요. -->
  <ul>
    <li v-for="fruit in items" :key="fruit">
      {{ fruit }}
    </li>
  </ul>

  <!-- 2. person 객체의 key-value를 출력하기 -->
  <!-- person = { name: '홍길동', age: 25, job: '개발자' }의 key와 value를 v-for를 사용하여 출력하세요. -->
  <ul>
    <li v-for="(value, key) in items2" :key>{{ key }} : {{ value }}</li>
  </ul>

  <!-- 3. items 배열과 인덱스를 함께 출력하기 -->
  <!-- items = ['Apple', 'Banana', 'Cherry']의 항목과 함께 인덱스를 출력하세요. -->
  <ul>
    <li v-for="(fruit, index) in items3" :key="fruit">{{ index }}. {{ fruit }}</li>
  </ul>

  <!-- 4. fruits 배열에서 'a'가 포함된 항목만 출력하기 -->
  <!-- fruits = ['Apple', 'Banana', 'Orange', 'Grapes']에서 'a'가 포함된 항목만 출력하세요. -->
  <ul>
    <li v-for="item in items4.filter((item) => item.includes('a'))" :key="item">
      {{ item }}
    </li>
  </ul>

  <!-- 5. buttons 배열을 출력하기 -->
  <!-- buttons = ['Save', 'Cancel', 'Delete']를 v-for로 반복해서 버튼을 출력하세요. -->
  <button v-for="text in items5" :key="text">
    {{ text }}
  </button>

  <!-- 6. cars 배열을 출력하고 모델과 가격을 표시하기 -->
  <!-- cars = [{ model: 'Tesla Model S', price: 79999 }, { model: 'BMW X5', price: 60999 }, { model: 'Audi Q7', price: 54999 }]를 v-for로 반복하고 각 모델과 가격을 출력하세요. -->
  <ul>
    <li v-for="(itemObj, index) in items6" :key="index">
      {{ itemObj.model }} - {{ itemObj.price }}$
    </li>
  </ul>

  <!-- 7. fruits 배열을 출력하며 색상 스타일 적용하기 -->
  <!-- fruits = ['Apple', 'Banana', 'Grapes']를 출력하고 'Apple'에는 빨간색, 그 외에는 초록색으로 스타일을 적용하세요. -->
  <ul>
    <li v-for="fruit in items7" :key="fruit">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>

  <!-- 8. categories 배열을 출력하고 카테고리별로 항목을 나누어 출력하기 -->
  <!-- categories = [{ name: 'Fruits', items: ['Apple', 'Banana'] }, { name: 'Vegetables', items: ['Carrot', 'Broccoli'] }]를 출력하고 각 카테고리별 항목들을 출력하세요. -->
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

  <!-- 9. items 배열을 출력하며 첫 번째 항목에 굵은 글씨 적용하기 -->
  <!-- items = ['Item 1', 'Item 2', 'Item 3']의 첫 번째 항목에만 굵은 글씨를 적용하고 출력하세요. -->
  <ul>
    <li
      v-for="(item, index) in items8"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ item }}
    </li>
  </ul>

  <!-- 10. items 배열을 출력하며 항목의 길이를 함께 표시하기 -->
  <!-- items = ['Apple', 'Banana', 'Orange']의 각 항목과 그 항목의 길이를 출력하세요. -->
  <ul>
    <li v-for="item in items9" :key="item">"{{ item }}".length = {{ item.length }}</li>
  </ul>

  <!-- Level 4 -->
  <h1>Level 4</h1>
  <!-- 1. students 배열의 데이터를 나이순으로 출력 -->
  <!-- students = [{ name: '홍길동', age: 20 }, { name: '김철수', age: 25 }, { name: '이영희', age: 22 }]를 나이순으로 정렬한 후 이름과 나이를 출력하세요. -->
  <ul>
    <li v-for="student in students.sort((a, b) => b.age - a.age)" :key="student.name">
      {{ student.name }}({{ student.age }})
    </li>
  </ul>

  <!-- 2. products 배열에서 가격이 50,000 이상인 제품만 출력 -->
  <!-- products = [{ name: '노트북', price: 100000 }, { name: '모니터', price: 45000 }, { name: '스마트폰', price: 60000 }] 중 가격이 50,000 이상인 제품만 출력하세요. -->
  <ul>
    <li v-for="product in products.filter((product) => product.price > 50000)" :key="product.name">
      {{ product.name }} - {{ product.price }}원
    </li>
  </ul>

  <!-- 3. categories 배열의 중첩된 항목들을 재귀적으로 출력 -->
  <!-- categories = [{ name: 'Fruits', items: ['Apple', 'Banana'] }, { name: 'Vegetables', items: ['Carrot', 'Broccoli', { name: 'Leafy Vegetables', items: ['Spinach', 'Lettuce'] }] }]의 항목들을 재귀적으로 출력하세요. 중첩된 카테고리는 다시 그 안의 항목들을 출력해야 합니다. -->
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

  <!-- 4. tasks 배열의 완료 여부를 체크박스와 함께 출력 -->
  <!-- tasks = [{ title: 'Vue 공부하기', completed: false }, { title: '프로젝트 작업', completed: true }, { title: '운동하기', completed: false }]를 출력하면서 각 항목에 체크박스를 추가하고, 완료된 항목은 체크된 상태로 보여주고, 체크 상태가 변경되도록 만드세요. -->
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label> <input type="checkbox" :checked="task.completed" /> {{ task.title }} </label>
    </li>
  </ul>

  <!-- 5. teamMembers 배열에서 직무별로 그룹화하여 출력 -->
  <!-- teamMembers = [{ name: '홍길동', role: '개발자' }, { name: '김철수', role: '디자이너' }, { name: '이영희', role: '개발자' }, { name: '박지민', role: '기획자' }]를 role별로 그룹화하여 각 직무별로 멤버들을 출력하세요. -->
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
