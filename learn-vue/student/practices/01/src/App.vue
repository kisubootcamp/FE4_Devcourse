<!-- 1. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
    isShow:true}
  },
}
</script>
<template>
  <h1 v-if="isShow===true">조건이 참입니다!</h1>
</template>
<style scoped></style> -->

<!-- 2. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      weather: 'cloudy',
    }
  },
}
</script>
<template>
  <h1 v-if="weather === 'sunny'">맑음</h1>
  <h1 v-else-if="weather === 'rainy'">비</h1>
  <h1 v-else>흐림</h1>
</template> -->

<!-- 3. -->
<!-- <script>
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
  <div v-html="message"></div>
</template>
<style scoped></style> -->

<!-- 4. -->
<!-- <script>
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
  <h1 v-show="isVisible">조건이 참입니다!</h1>
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

<!-- 7.-->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      isGreeting: true,
    }
  },
}
</script>
<template>
  <h1 v-if="isGreeting === true">Hello</h1>
  <h1 v-else>GoodBye</h1>
</template> -->

<!-- 8. -->
<!-- <script>
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
  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template> -->

<!-- level2 -->

<!-- 1. -->
<!-- <script>
export default{
  name:"App",
  data(){
    return{
      status:"loading", // "loading", "error", "success", "idle"
    };
  },
};
</script>

<template>
<h1 v-if="status==='loading'">데이터를 로딩 중입니다...</h1>
<h1 v-else-if="status==='error'">에러가 발생했습니다.</h1>
<h1 v-else-if="status==='success'">데이터 로딩 완료!</h1>
<h1 v-else-if="status==='idle'">대기중</h1>
</template>
<style scoped></style> -->

<!-- 2. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
    }
  },
}
</script>
<template>
  <h1 v-if="isHtml === true" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
</template>
<style scoped></style> -->

<!-- 3. -->
<!-- <script>
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
  <div v-if="role === 'admin'">관리자 메뉴</div>
  <div v-else-if="role === 'editor'">편집자 메뉴</div>
  <div v-else-if="role === 'viewer'">읽기 전용 메뉴</div>
</template>
<style scoped></style> -->

<!-- 4. -->
<!-- <script>
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
      account: 'premium', // basic, premium
    }
  },
}
</script>
<template>
  <div v-if="status === 'loggedIn' && account === 'basic'">
    <h1>기본 계정으로 로그인 중</h1>
  </div>
  <div v-else-if="status === 'loggedIn' && account === 'premium'">
    <h1>프리미엄 계정으로 로그인 중</h1>
  </div>
  <div v-else-if="status === 'loggedOut'">
    <h1>로그인 필요</h1>
  </div>
  <div v-else-if="status === 'banned'">
    <h1>계정 정지</h1>
  </div>
</template>
<style scoped></style>
 -->

<!-- 5. -->
<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      selectedOption: 'bold', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
    }
  },
}
</script>
<template>
  <div v-if="selectedOption === 'bold'" v-html="messageHTML"></div>
  <div v-else-if="selectedOption === 'italic'" v-html="messageItalic"></div>
</template>
<style scoped></style> -->

<!-- 6. -->
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
  <h1 v-if="status === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status === 'purchased'">구매완료</h1>
  <h1 v-else-if="status === 'abandoned'">구매가 취소되었습니다.</h1>
</template>
<style scoped></style> -->

<!-- level 3 -->

<!-- 1. -->
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
  <li v-for="(value, index) in items" :key="index">{{ value }}</li>
</ul>
</template>
<style scoped></style> -->

<!-- 2. -->
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
    <li v-for="(value, key) in items" :key>{{ key }}-{{ value }}</li>
  </ul>
</template> -->

<!-- 3. -->
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
  <div v-for="(value, index) in items" :key="index">{{ index }}-{{ value }}</div>
</template> -->

<!-- 4. -->
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
  <div v-for="fruit in items.filter((fruit) => fruit.includes('a'))" :key="fruit">{{ fruit }}</div>
</template> -->

<!-- 5. -->
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
  <button v-for="item in items" :key="item">{{ item }}</button>
</template> -->

<!-- 6. -->
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
  <li v-for="item in items" :key="item.model">{{ item.model }} {{ item.price }}</li>
  </ul>
</template> -->

<!-- 7. -->
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
    <li v-for="item in items" :key="item">
      <span v-if="item === 'Apple'" style="color: red">{{ item }}</span>
      <span v-else style="color: green">{{ item }}</span>
    </li>
  </ul>
</template> -->

<!-- 8. -->
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
    <li v-for="(item, index) in categorys" :key="index">
      {{ item.name }}
      <ul>
        <li v-for="it in item.items" :key="it">{{ it }}</li>
      </ul>
    </li>
  </ul>
</template> -->

<!-- 9. -->
<!-- <script>
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
      v-for="(value, index) in items"
      :key="index"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      {{ value }}
    </li>
  </ul>
</template> -->

<!-- 10. -->
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
    <li v-for="value in items" :key="value">{{ value }} - {{ value.length }}</li>
  </ul>
</template> -->

<!-- level4 -->
<!-- 1. -->
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
    <li v-for="item of students.sort((a, b) => a.age - b.age)" :key="item">
      {{ item.name }} , {{ item.age }}
    </li>
  </ul>
</template> -->

<!-- 2. -->
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
    <li v-for="item in products.filter((p) => p.price >= 50000)" :key="item.name">
      {{ item.name }} // {{ item.price }}
    </li>
  </ul>
</template> -->

<!-- 3. -->
<!-- <script>
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
      {{ category.name }}
      <ul>
        <li v-for="item in category.items" :key="item">
          <div v-if="typeof item === 'string'">{{ item }}</div>
          <div v-else>
            <span>{{ item.name }}</span>
            <ul>
              <li v-for="it of item.items" :key="it">
                {{ it }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template> -->

<!-- 4. -->
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
    <li v-for="task of tasks" :key="task.title">
      <label><input type="checkbox" :checked="task.completed" />{{ task.title }}</label>
    </li>
  </ul>
</template> -->

<!-- 5. -->
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
      v-for="(value, index) in teamMembers.reduce((acc, member) => {
        if (!acc[member.role]) acc[member.role] = []
        acc[member.role].push(member.name)
        return acc
      }, {})"
      :key="index"
    >
      {{ index }}
      <ul>
        <li v-for="name of value" :key="name">
          {{ name }}
        </li>
      </ul>
    </li>
  </ul>
</template> -->
