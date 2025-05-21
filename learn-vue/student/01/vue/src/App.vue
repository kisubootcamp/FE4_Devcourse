<!-- Options API(2.x) / Composition API (3.x) -->

<!-- 1.
<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<template>
  <h1 v-if="isShow">조건이 참입니다!</h1>
</template>
<style scoped></style> -->

<!-- 2.
<script>
export default {
  name: 'App',
  data() {
    return {
      weather: 'sunny', // rainy, cloudy
    }
  },
}
</script>
<template>
  <h1 v-if="weather === 'sunny'">맑음</h1>
  <h1 v-if="weather === 'rainy'">비</h1>
  <h1 v-if="weather === 'cloudy'">흐림</h1>
</template> -->

<!-- 3.
<script>
export default {
  name: 'App',
  data() {
    return { message: '<strong>HTML 출력</strong>' }
  },
}
</script>
<template>
  <h1 v-html="message"></h1>
</template>
<style scoped></style> -->

<!-- 4.
<script>
export default {
  name: 'App',
  data() {
    return {
      message: '<strong>HTML을 출력합니다!</strong>',
    }
  },
}
</script>
<template>
  <h1 v-text="message"></h1>
</template>
<style scoped></style> -->

<!-- 5. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      isVisible: false,
    }
  },
}
</script>
<template>
  <h1 v-show="isVisible">조건이 참입니다.</h1>
</template>
<style scoped></style> -->

<!-- 6. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      message: 'sucoding',
    }
  },
}
</script>
<template>
  <div v-text="message"></div>
</template>
<style scoped></style> -->

<!-- 7.
<script>
export default {
  name: 'App',
  data() {
    return { isGreeting: true }
  },
}
</script>
<template>
  <p v-if="isGreeting === true">Hello</p>
  <p v-if="isGreeting === false">Goodbye</p>
</template> -->

<!-- 8.
<script>
export default {
  name: 'App',
  data() {
    return {
      status: 'loggedIn', // loginRequired, fail
    }
  },
}
</script>
<template>
  <p v-if="status === 'loggedIn'">로그인 중</p>
  <p v-if="status === 'loginRequired'">로그인 필요</p>
  <p v-if="status === 'fail'">비밀번호 오류</p>
</template> -->

<!-- Lv2

1.
<script>
export default {
  name: "App",
  data() {
    return {
      status: "error", // "loading", "error", "success", "idle"
    };
  },
};
</script>
<template>
  <h1 v-if="status === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기중</h1>
</template>
<style scoped></style> -->

<!-- 2.
<script>
export default {
  name: 'App',
  data() {
    return {
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
    }
  },
}
</script>
<template>
  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
</template>
<style scoped></style> -->

<!-- 3.
<script>
export default {
  name: 'App',
  data() {
    return {
      role: 'admin', // "admin", "editor", "viewer"
    }
  },
}
</script>
<template>
  <div v-if="role === 'admin'">관리자 메뉴입니다.</div>
  <div v-if="role === 'editor'">편집자 메뉴입니다.</div>
  <div v-if="role === 'viewer'">읽기전용 메뉴입니다.</div>
</template>
<style scoped></style> -->

<!-- 4.
<script>
/*
- `"loggedIn"`, `"basic"`: "기본 계정으로 로그인 중"
- `"loggedIn"`, `"premium"`: "프리미엄 계정으로 로그인 중"
- `"loggedOut"`: "로그인 필요"
- `"banned"`: "계정 정지"
*/
export default {
  name: 'App',
  data() {
    return {
      status: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium
    }
  },
}
</script>
<template>
  <div v-if="status === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</div>
  <div v-if="status === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</div>
  <div v-if="status === 'loggedout'">로그인 필요</div>
  <div v-if="status === 'banned'">계정 정지</div>
</template>
<style scoped></style> -->

<!-- 5.
<script>
export default {
  name: 'App',
  data() {
    return {
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
    }
  },
}
</script>
<template>
  <div v-if="selectedOption === 'bold'" v-html="messageHTML"></div>
  <div v-if="selectedOption === 'italic'" v-html="messageItalic"></div>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      status: 'inCart', //"inCart", "purchased", "abandoned"
    }
  },
}
</script>
<template>
  <div v-if="status === 'inCart'">장바구니에 상품이 있습니다</div>
  <div v-else-if="status === 'purchased'">구매 완료</div>
  <div v-else-if="status === 'abandoned'">구매 취소</div>
</template>
<style scoped></style> -->

Lv.3

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: ['사과', '바나나', '오렌지'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="fruit in items" :key="fruit">
      {{ fruit }}
    </li>
  </ul>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: { name: '홍길동', age: 25, job: '개발자' },
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(value, key) in items" :key>{{ key }} - {{ value }}</li>
  </ul>
</template>
 -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry'],
    }
  },
}
</script>
<template>
  <ul>
    <div v-for="(fruit, index) in items" :key="fruit">{{ index }} - {{ fruit }}</div>
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange', 'Grapes'],
    }
  },
}
</script>
<template>
  <ul>
    <div v-for="item in items.filter((item) => item.includes('a'))" :key="item.id">
      {{ item }}
    </div>
  </ul> 
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Save', 'Cancel', 'Delete'],
    }
  },
}
</script>
<template>
  <button v-for="text in items" :key="text">{{ text }}</button>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="(itemObj, index) in items" :key="index">
      <span>{{ itemObj.model }}</span>
      <span> - </span>
      <span>{{ itemObj.price }}</span>
    </li>
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Grapes'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="fruit in items" :key="fruit">
      <span v-if="fruit === 'apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      categorys: [
        { name: 'Fruits', items: ['Apple', 'Banana'] },
        { name: 'Vegetables', items: ['Carrot', 'Broccoli'] },
      ],
    }
  },
}
</script>
<template>
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
</template> -->
<!-- 
<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>
<template>
  <ul>
   <li
      v-for="(item, index) in items"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange'],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }} // {{ item.length }}</li>
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="student in students.sort((a, b) => (b.age = a.age))" :key="student.name">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 },
        { name: '스마트폰', price: 60000 },
      ],
    }
  },
}
</script>
<template>
  <ul>
    <li v-for="product in products.filter((product) => product.price)" :key="item.id">
      {{ item }}
    </li>
  </ul>
</template> -->

<!-- 
<script>
export default {
  name: 'App',
  data() {
    return {
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
    }
  },
}
</script>
<template>
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
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [
        { title: 'Vue 공부하기', completed: false },
        { title: '프로젝트 작업', completed: true },
        { title: '운동하기', completed: false },
      ],
    }
  },
}
</script>
<template>
  
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <label> <input type="checkbox" :checked="task.completed" /> {{ task.title }} </label>
    </li>
  </ul>
</template> -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
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
</template> -->
