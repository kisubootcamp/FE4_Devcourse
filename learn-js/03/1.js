// ES5
// 자바스크립트는 prototype 기반의 언어이다.
// 생성자 함수 - 파스칼케이스
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
  // this.getMaxSpeed = function () {
  //   return `Max Speed: ${this.speed * 2}`;
  // };
}

// 인스턴스 - 생성자 함수로 찍어낸 하위 객체를 가리키는 용어
// 프로토타입체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
// 인스턴스 안에도 prototype 객체가 들어있고, 당연히 그 안에도 constructor가 들어가있다.
const car1 = new Car('bmw', 200);
console.log(car1.teacher);
console.dir(car1.__proto__.teacher);

// const car2 = new Car("g80", 200);
// const car3 = new Car("g70", 200);

// console.log(car1);
// console.log(car2);
// console.log(car3);

/*
car1을 생성하고, 콘솔에 눌러보면, name, speed. getMaxSpeed 가 car1 안에 들어가게 된다.
수많은 하위 객체를 찍어냈을때,  모든 하위 객체에 getMaxSpeed 라는 똑같은 코드들이 들어있는건 너무 비효율적이다.
-> 프로토타입을 사용하기 시작
프로토타입 : 함수와 1:1로 매칭되는 공간 

console.dir(car1);  dir -> 객체의 구조를 상세하게 볼 수 있게 해준다.
그러면 함수 안에는
arguments: null
caller: null
length : 2
name: "Car"
prototype : {}  
이 존재하고 있다. 이걸 펼치면?

prototype: {
  constructor: f Car(name,speed)
}
  :: 프로토타입은 constructor 을 가지고 있는데, 이건 함수를 가리킨다.
  따라서, 함수는 프로토타입을 이용해서 프로토타입을 참조하고, 프로토타입은 constructor 로 함수를 참조한다
  즉 서로 1:1로 매칭되고 서로를 참조한다는 뜻
*/

/*
그럼 저 공통된 함수 getMaxSpeed 를, 프로토타입에 넣자!
어차피 모든 애들이 프로토타입을 참조하기 때문에! 

console.dir(car1.__proto__) 로 프로토타입을 출력할 수 있다.
이걸로, 자신을 생성한 생성자함수의 프로토타입 객체를 확인할 수 있다.
*/
Car.prototype.teacher = '잘생겼다';
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

/*
이렇게 하면, 프로토타입 객체 안에 원하는 속성을 추가할 수 있다.
*/
console.dir(car1.__proto__.teacher); // 잘생겼다
console.dir(car1.teacher); //을 해도 잘생겼다가 나온다. 어차피 프로토타입을 참조하기 때문에

/*
프로토타입체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
console.dir(car1.getMaxSpeed())            -> 400
console.dir(car1.__proto__.getMaxSpeed()); -> NaN
*/

// .__proto__ 도 프로토타입 속성이 있다. -> 얘도 누군가의 프로토타입 객체를 가리킨다.
// 그걸 알아보려면 누군가의 constructor 을 알아내야하는데, 그게 바로 Object 라는 이름의 생성자 함수였다.
