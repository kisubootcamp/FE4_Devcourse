// 객체 완전 정복
//this 개념
//단축 속성명
//단축 함수


// NOTE this 개념
// console.log(this); //전역 상태 this 는 윈도우 객체 (암기)

// NOTE 그 외 this : this 는 나를 호출한 객체이다.

// function printThis() {
//   console.log("new");
//   console.log(this);
// }
// printThis(); // window.printThis(); 와 같음 -> printThis()를 호출한 객체는 window

const obj = {
  name: "sucoding",
  age: 20,
  run: function () {
    console.log(this.name);
    console.log(this);
  },
};
console.log(obj.this);

function run() {
  console.log(this);
}
// 단축 속성명
const obj1 = {
  name: "sucoding",
  run,
};
obj1.run();

const obj3 = {
  name: "sucoding",
  smallObject: {
    name: "프로그래머스",
    run: function () {
      console.log(this.name);
    }.bind({ name: "수코딩 잘생김" }), // this에 바인딩이 생기면 바인딩만 참조한다. 바인드는 참조 대상을 바꿔버린다
  },
};
obj3.smallObject.run();

const user = {
  // run: function (){},
  run2() {}.bind({}), //단축함수에서는 bind를 사용할 수 없다.
};
