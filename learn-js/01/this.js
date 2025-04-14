// this 개념
// this -> this는 나를 호출한 객체이다.

function printThis() {
  console.log(this);
  console.log("now");
}
printThis(); // = window.printThis();

function run() {
  console.log(this);
}

// 단축 속성명 (= 객체의 키와 값이 같으면 하나만 적어도 된다)
const obj = {
  name: "sucoding",
  run, // 단축 속성명 (= 객체의 키와 값이 같으면 하나만 적어도 된다)
  smallObject: {
    name: "프로그래머스",
    age: 20,
    run: function () {
      console.log(this); // 프로그래머스
      console.log(obj.name); // sucoding
    }.bind({ name: "수코딩" }), // bind가 생기면 더이상 자신의 객체를 출력하지 않음.

    // 단축함수에서는 바인드를 사용할 수 없음.
    run2() {
      console.log(this.age);
    }, // bind로 인해 30출력
    // }.bind({ age: 30 }),
  },
};
obj.smallObject.run();
obj.smallObject.run2();

// 단축 함수
const user = {
  //기본함수
  run: function () {},

  //단축함수. -> 바인드를 사용할 수 없음.
  run2() {},
};
user();
