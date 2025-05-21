<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: true,
      age: 25,
      text: '',
      fruit: 'apple',
      fruits: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    nameHandler(e) {
      this.name = e.target.value
    },
    textHandler(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <!-- 
  ### 문제 1: 사용자 이름 입력 및 출력

사용자가 자신의 이름을 입력할 수 있는 텍스트 필드를 만들고, 입력한 이름을 화면에 실시간으로 출력하세요.

**구체적인 요구사항:**

- 입력란에 사용자가 이름을 입력하면 그 값이 화면에 실시간으로 반영됩니다.
- 기본값은 빈 문자열이며, 사용자가 이름을 입력할 때마다 화면에 출력되는 내용도 즉시 업데이트됩니다. 
  -->
  <h2>{{ name }}</h2>
  <form @submit.prevent>
    <input type="text" :value="name" @input="nameHandler" />
  </form>

  <!-- 
  ### 문제 2: 체크박스를 이용한 회원가입 약관 동의

사용자가 체크박스를 통해 "회원가입 약관에 동의합니다"라는 항목을 동의/비동의할 수 있게 하고, 체크박스 상태에 따라 동의 여부를 실시간으로 화면에 출력하세요.

**구체적인 요구사항:**

- 체크박스를 클릭하여 `isChecked` 상태가 `true` 또는 `false`로 변합니다.
- 체크된 상태와 해제된 상태에 따라 텍스트가 동적으로 변합니다. 
  -->
  <form @submit.prevent>
    <h2>{{ isChecked ? '동의' : '비동의' }}</h2>
    <label> <input type="checkbox" v-model="isChecked" />회원가입 약관에 동의합니다. </label>
  </form>

  <!-- 
   ### 문제 3: 범위 슬라이더로 나이 조정

슬라이더를 사용하여 나이를 조정할 수 있도록 하고, 사용자가 슬라이더를 움직일 때마다 선택된 나이가 화면에 실시간으로 출력되도록 만드세요.

**구체적인 요구사항:**

- 범위 슬라이더는 input type = “range” 요소를 말합니다.
- 나이를 조정할 수 있는 범위 슬라이더를 제공하며, `min` 값은 1, `max` 값은 100으로 설정합니다.
- 슬라이더 값이 변경될 때마다 선택된 나이가 화면에 업데이트됩니다.
- 기본값은 25로 설정됩니다.
   -->
  <h2>{{ age }}살</h2>
  <form @submit.prevent>
    <input type="range" v-model="age" min="1" max="100" />
  </form>

  <!-- 
   ### 문제 4: 여러 줄 텍스트 입력 받기

`textarea`를 사용하여 여러 줄의 텍스트를 입력받고, 입력한 텍스트를 실시간으로 화면에 출력하세요.

**구체적인 요구사항:**

- 사용자가 `textarea`에 텍스트를 입력할 수 있도록 합니다.
- 입력된 텍스트는 실시간으로 화면에 출력되며, 텍스트의 변경 사항은 바로 반영됩니다.
   -->
  <h2>{{ text }}</h2>
  <form @submit.prevent>
    <!-- <textarea @input="textHandler"></textarea> -->
    <textarea v-model="text"></textarea>
  </form>

  <!-- 
   ### 문제 5: 드롭다운에서 선택한 값 출력

드롭다운 메뉴를 만들어 사용자가 선택한 옵션을 실시간으로 출력하세요.

**구체적인 요구사항:**

- 드롭다운에서 3개의 옵션(apple, banana, orange)을 제공하며, 선택된 값은 화면에 출력됩니다.
- 기본 선택값은 'apple'으로 설정됩니다.
   -->
  <h2>{{ fruit }}</h2>
  <form @submit.prevent>
    <select v-model="fruit">
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="orange">오렌지</option>
    </select>
  </form>

  <!-- 
   ### 문제 6: 여러 체크박스 선택

사용자가 여러 개의 체크박스를 선택하여 선택된 항목들을 화면에 출력하도록 만드세요.

**구체적인 요구사항:**

- 체크박스로 선택할 수 있는 값은 apple, banana, orange 입니다.
- 사용자가 체크박스를 여러 개 선택할 수 있으며, 선택된 항목은 배열로 관리됩니다.
- 선택된 항목들을 쉼표로 구분하여 출력합니다.
   -->
  <h2>{{ fruits.join(', ') }}</h2>
  <form @submit.prevent>
    <label><input type="checkbox" v-model="fruits" value="apple" />apple</label>
    <label><input type="checkbox" v-model="fruits" value="banana" />banana</label>
    <label><input type="checkbox" v-model="fruits" value="orange" />orange</label>
  </form>

  <!-- 
   ### 문제 7: 라디오 버튼으로 성별 선택

라디오 버튼을 사용하여 성별을 선택하고, 선택된 성별을 화면에 출력하세요.

**구체적인 요구사항:**

- 라디오 버튼을 통해 성별을 선택할 수 있으며, 선택된 성별을 화면에 출력합니다.
- 성별은 male 또는 female 입니다.
- 기본 선택값은 ‘male'입니다.
   -->
  <h2>{{ gender }}</h2>
  <form @submit.prevent>
    <label><input type="radio" v-model="gender" name="gender" value="male" />남</label>
    <label><input type="radio" v-model="gender" name="gender" value="female" />여</label>
  </form>

  <!-- 
    ### 문제 8: 색상 선택기

사용자가 색상 선택기를 이용해 색을 선택하고, 그 선택된 색으로 배경색을 변경하세요.

**구체적인 요구사항:**

- 가로 100px, 세로 100px, border black의 div 영역을 만듭니다.
- 색상 선택기 요소를 추가합니다. (input type =”color” )
- 색상 선택기에서 선택된 색을 실시간으로 `div`의 배경색에 적용합니다.
- 선택된 색은 `#ffffff`로 기본 설정됩니다.
    -->
  <h2>{{ color }}</h2>
  <input type="color" v-model="color" />
  <form @submit.prevent>
    <div
      :style="{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: color,
      }"
    ></div>
  </form>
</template>
<style scoped></style>
