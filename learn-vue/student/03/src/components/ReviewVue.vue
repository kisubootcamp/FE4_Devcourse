<!-- 1.스타일 -->
<!--기본개념
<template>
  <div class="example">
    Hello, Vue!
  </div>
</template>

<style>
.example {
  color: blue;
}
</style> 처럼 태그안에 class="스타일이름" 으로 style class 사용 /
 h1{color:red;}인 경우 h1태그 전체에 적용됨
 =><style scoped>로 쓰면 현재 컴포넌트에서만 스타일이 적용됨/
 ::v-deep .example{...} 처럼 사용하면 자식 컴포넌트까지 강제로 적용 가능
 -->

<!-- 적용방법
  1. 동적 스타일 바인딩
  <template>
  <div :style="{ color: color, fontSize: fontSize }"> //스타일을 속성값을 직접넣어 적용(:style사용)
    Dynamic style example
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'blue',
      fontSize: '20px',
    };
  },
};
</script> ==> 스타일 속성값에 동적으로 변수를 대입시킴(객체,배열로 가능)
 
2. 동적 클래스 바인딩
:class 활용, 조건을 동적으로 불러와서 true면 해당 클래스 적용
ex) <div :class="{active:isActive}"></div> => isActive가 true면 active클래스 적용

 -->
<!-- <script>
export default {
  name: 'reviewvue',
  data() {
    return {
      
    };
    props:{
        name:{
            type:String,Number,Function,Boolean,Array,Symbol
            default(){}//
            required:true, //필수속성 표시
            validator(){return true} //유효성 검사, 타입,특정 조건 만족하는지 검사
        }
    },
    emits:['printHello']
  },
};
</script>
<template>
  <button @click="$emit('printHello')">클릭</button>
</template>
<style scoped>
  
</style>
//이 외에 tailwind도 사용 가능
-->

<!-- 2. computed properties/ watchers-->
<!-- computed properties
  데이터 변경시 자동 업데이트되는 속성(주로 읽기전용)
  computed:{...}로 사용
  캐싱됨(한번 계산해둔 값 업데이트전까지 활용)
 -->
<!-- watchers
   특정 데이터 속성 변경을 감지하여, 변경에 따른 추가 작업 실행
   비동기 작업이나 API호출에도 유용
   watch:{...}로 사용
   객체나 배열의 변경을 깊이 감지하지는 못함 (값만 바뀌어 참조값이 동일하면 변경되었다고 판단x)
   =>watch의 특정 속성에 객체 내부에 deep:true 사용으로 객체속성,배열값 변경 감지 가능
   <script>
  export default {
    data() {
      return {
        age: 25,
      };
    },
    watch: {
      age(newVal, oldVal) { //데이터 변경 전후 값 가져올 수 있음
        console.log(`Age changed from ${oldVal} to ${newVal}`);
      },
    },
  };
  </script>
    -->

<!-- 3. 컴포넌트 전역,지역등록 -->
<!-- 전역등록
      App.vue에 
      const app=createApp(app);
      app.component('MyComponent',MyComponent);로 지정하면 전역에서 사용가능
      => 의존성 관리 어려움(자식 컴포넌트에서 값을 업데이트해도 적용되지않음), 메모리 낭비, 충돌가능
      공통 컴포넌트(버튼,카드,모달...)에서 사용/프로젝트 규모 작은 경우 사용
       -->
<!-- 지역등록
       부모 컴포넌트에 script내부에 components:{자식 컴포넌트,} 추가,import 자식컴포넌트 추가하여 사용
       특정 컴포넌트에서만 사용될경우/ 프로젝트 규모 큰 경우 사용
      -->

<!--  -->
<!-- 4. 컴포넌트 props,emits-->
<!--props: 부모 컴포넌트가 자식 컴포넌트에 데이터 전달(단방향)하기 위한 속성
      - script내부에 props: 로 사용
      - 부모 컴포넌트에서 <ChildComponent 속성="내용"/>으로 전달, 자식 컴포넌트에서는 props:로 받기
      - 자식 컴포넌트에서 props내부에서 속성:{type:타입, required:true, default(){}, validator(){},}으로 정의
      required-필수속성여부 / default(){}-초기(기본)값 / validator(){}-유효성검사, 특정조건이나 타입에 맞는지 검사 
   -->

<!-- emits: 자식컴포넌트->부모컴포넌트로 이벤트 발생 알림
      -props로 받은 데이터를 변경해야할때, 직접 변경불가능
      => emits: [변경해야할 데이터], 후 $emit()사용
      -->
<!-- 5. 컴포넌트 provide/inject -->
<!-- provide/inject
     전역설정+의존성
     부모 컴포넌트에서 provide으로 정의, 자손 컴포넌트에서 inject으로 받아옴

     -->
