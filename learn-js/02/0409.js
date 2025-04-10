// 객체
// this 개념
// this -> this는 나를 호출한 객체이다.
// 단축 속성명 -> bind 바로 못씀. 풀어서 쓰면 가능
// 단축 함수
// 스코프? 실행 컨텍스트 내부의 영역
// 전역 실행컨텍스트
// 함수 실행컨텍스트

console.log(this); //전역상태의 객체는 window 객체 -> 그냥 암기

function printThis() {
  console.log(this);
}
printThis();

// 단축 속성명
const obj = {
  name: "sucoding",
  smallObject: {
    name: "프로그래머스",
    run: function () {
      console.log(this.name); // 프로그래머스
      console.log(this.obj); // sucoding
    }.bind({ name: "수코딩 잘생?" }), //bind는 두번 x. this가 가르키는 객체를 바꿈
    run2: function () {
      console.log(this); // 여기는 obj 객체
    },
    run3() {
      console.log(this);
    }, // 여기서 bind 불가능 -> 단축 속성명
  },
};

obj.smallObject.run();
obj.smallObject.run2();
