// ES5
// 자바스크립트는 prototype 기반의 언어이다.

// 생성자 함수
// new 키워드로 호출함
// 함수를 호출할 때 객체를 반환하여 리턴
// 생성자 함수를 출력했을 때 생성한 함수의 기록이 남는다

function Car(name, speed) {
  // 생성자 함수는 파스칼케이스로 함수명 지정
  this.name = name;
  this.speed = speed;
}

Car.prototype.teacher = "👍";
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};
console.dir(Car);

const car1 /* 인스턴스 */ = new Car("bmw", 200);
// 인스턴스: 생성자 함수로 찍어낸 객체를 가리키는 용어
// 생성자 함수가 가지고 있는 속성을 다 가지고 있고 캡슐화된 속성 또한 가지고 있다.
console.dir(car1);
console.dir(car1.__proto__.teacher);
console.log(car1);
console.dir(car1.__proto__);
console.log(car1.getMaxSpeed()); // getMaxSpeed를 car1이 불러왔기 때문에 getMaxSpeed 안의 this는 car1을 불러온다
console.log(car1.__proto__.getMaxSpeed()); // 여기서의 this 는 __proto__이다. prototype 내부적으로는 speed속성이 없어서 NaN
console.log(car1.hasOwnProperty("name"));

const num = 3.14;
console.log(num.toFixed(2)); // toFixed가 prototype에 내장되어 있고 그걸 꺼내다가 사용하는 것.
// car1을 확인하면 teacher가 없다.
// 프로토타입 체인: 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
// __ : 숨기고 싶은 속성의 암묵적 표현
// const car2 = new Car("hyundai", 200);
// console.log(car1);
// console.log(car1.name);
// console.log(car2);

// 객체로 지정했을 때와 다름 없이 속성을 호출할 수 있다.
// 생성자 함수의 스펙을 바꿔도 하위 호출에서 일관적으로 바뀐다.

// 모든 함수는 자신과 1:1로 매칭이 되는 공간이 있다. -> prototype의 base가 되는 설명

// arguments, caller, ... prototype
// constructor는 함수를 참조하고 함수는 constructor를 참조함 -> 상호 참조 관계
// class 는 생성자 함수를 쉽게 만들어준다
