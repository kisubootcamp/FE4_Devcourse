// this 개념
// this -> this는 나를 호출한 객체이다.
// 단축 속성명
// 단축 함수
// 스코프? 실행 컨텍스트 내부의 영역
// 전역 실행컨텍스트
// 함수 실행컨텍스트

const obj = {
  name: "sucoding",
  smallObject: {
    name: "프로그래머스",
    run: function () {
      console.log(this); // 프로그래머스
    }.bind({ name: "프로그래머스" }),
    run2() {
      console.log(this);
    },
  },
};

obj.smallObject.run();
obj.smallObject.run2();
