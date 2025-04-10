// this 개념
// this -> this는 나를 호출한 객체이다.

// console.log(this); // 전역상태에서 -> window 객체(암기)

// function printThis() {
//   console.log(this); // window객체
// }
// printThis(); // = window.printThis();

// const obj = {
//   name: "sucoding",
//   run: function () {
//     console.log(this); // obj객체
//   },
// };
// obj.run();

// function run() {
//   console.log(this); // obj객체
// }

// // 단축 속성명
// const obj = {
//   name: "sucoding",
//   run,
// };

// obj.run();

// 스코프? 실행 컨텍스트 내부의 영역
// 전역 실행 컨텍스트
// 함수 실행 컨텍스트

// const obj = {
//   name: "sucoding",
//   smallObject: {
//     name: "프로그래머스",
//     run: function () {
//       console.log(this); // smallObject객체, 프로그래머스
//       //   console.log(obj.name); // sucoding
//     }
//       .bind({ name: "프로그래머스" }) // bind 사용하면 this가 이걸 가리키게 됨
//       .bind({}), // 두번은 적용안됨
//     run2: function () {
//       console.log(this);
//     }.bind({ name: "수코딩" }),
//   },
// };
// obj.smallObject.run();
// obj.smallObject.run2();

// 단축 속성명
// 단축 함수
// 단축 함수는 바인딩 적용 안됨
// const user = {
//   run: function () {},
//   run2() {},
// };

const obj = {
  name: "sucoding",
  smallObject: {
    name: "프로그래머스",
    run: function () {
      console.log(this);
    }.bind({ name: "프로그래머스" }),
    run2() {
      console.log(this);
    }, // 단축함수라서 바인딩 적용 안됨
  },
};
obj.smallObject.run();
obj.smallObject.run2();
