// !!! 객체 정복 !!!

// this 개념
// -> this는 나를 호출한 객체이다.
console.log(this); // 전역 상태에서는 window 객체를 참조함

function printThis() {
  console.log(this); // window가 출력되는 이유: 함수가 윈도우에 속하면서 this가 윈도우를 불러온다
}
printThis(); // = window.printThis(); 함수 선언식으로 선언된 함수는 자동으로 윈도우 객체로 들어간다

function run() {
  console.log(this);
} // 함수가 밖에 있더라도 this는 obj를 가리킨다

const obj = {
  // 전역 실행 컨텍스트에 선언된 객체
  name: "Lee",
  // run, // 단축 속성명 run = run
  smallObject: {
    name: "네이버",
    run: function () {
      console.log(this.name); // 실행 컨텍스트 내부에 name이 없으면 undefined. 상위 컨텍스트를 찾아보지 않음.
      console.log(obj.name); // 아우터가 상위 컨텍스트로 올라가서 obj를 찾아옴
    }.bind({ name: "Ji" }),
  },
};

obj.smallObject.run();

// bind({})메서드로 this가 불러오는 객체를 바꿀 수 있다. 중복 사용은 불가능
// bind로 외부 객체를 참조할 수는 없다

// 단축 함수
const user = {
  run: function () {},
  run2() {}, // 단축함수로 줄여서 표현 가능하다
};
// 단축 속성명에서는 bind를 바로 사용할 수 없기 때문에 기존의 함수 선언문으로 풀어서 작성해야 한다.
//run2() {}.bind()
