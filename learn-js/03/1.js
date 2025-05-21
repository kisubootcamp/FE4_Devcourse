//ES5 생성자 함수
// 자바스크립트는 prototype 기반의 언어
// 함수의 이름이 대문자라면 생성자 함수로 생각하자 - 암묵적 협의 *파스칼케이스
// 생성자 함수에서 변경하면 나머지 객체도 자동적으로 바꿔서 생성 가능
// 하나의 생성자를 가지기 때문에 같은 구조를 가진 다른 값의 객체를 찍어낼 수 있음
// but
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.teacher = "잘생겼다"; // 생성자 함수 포로토타입 접근해서 추가
Car.prototype.getMaxSpeed = function () {
  return `Max Speed : ${this.speed * 2}`;
};
console.dir(Car);

console.dir(Car); // console.dir() : 객체의 구조를 깊이 탐색함

const cars1 = new Car("bmw", 200); // 생성자 함수로 찍어낸 객체 : instance  -> cars1 은 Car의 인스턴스
console.dir(cars1.__proto__.teacher); // Car 인스턴스의 프로토타입 참조 __proto__ , 자신을 생성한 함수의 프로토타입을 가리킴
console.dir(cars1.__proto__); // Car 인스턴스의 프로토타입 참조 __proto__ , 자신을 생성한 함수의 프로토타입을 가리킴
console.log(cars1.__proto__.getMaxSpeed());
console.dir(cars1.__proto__.getMaxSpeed());
console.dir(cars1.teacher); // -----> 프로토타입 체인 : 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
console.dir(cars1);
console.log(cars1); //Car {name: 'bmw', speed: 200, maxSpeed: ƒ} **앞에 Car 는 생성자 함수 Car 로부터 만들어진 객체임을 알려줌
console.log(cars1.name);
console.log(cars1.speed);
console.dir(cars1.hasOwnProperty("name")); // true
console.dir(cars1.hasOwnProperty("superman")); // false
//---> 프로토타입 체이닝으로 인스턴스를 타고 올라가서 최상위에 있는 Object라는 생성자 함수의 메서드를 가져와서 사용
// console.log(cars1.getmaxSpeed());

// 자바스크립트에서 모든 함수는 자기와 1대 1로 매칭되는 프로토타입이라는 공간(객체)이 있다
// --> console.dir() 에 생성자 함수를 찍어보면 객체를 확인할 수 있음
// 서로 상호 참조 관계
// 모든 인스턴스는 생성자 함수의 프로토타입을 가리킴
//프로토타입 객체는 유일무이한 공간
// 인스턴스는 자신을 생성한 생성자의 프로토타입 객체에 접근할 수 있다
// 프로토타입을 사용하면 메모리적으로도 좋음
// 프로토타입을 이용하여 동적으로 객체 추가

{
  // 객체를 일일이 만들었을때,, 너무 불편

  const car1 = {
    name: "bmw",
    speed: 100,
    maxSpeed() {
      return `Max Speed : ${this.speed * 2}`;
    },
  };

  const car2 = {
    name: "g90",
    speed: 70,
    maxSpeed() {
      return `Max Speed : ${this.speed * 2}`;
    },
  };

  const car3 = {
    name: "avante",
    speed: 50,
    maxSpeed() {
      return `Max Speed : ${this.speed * 2}`;
    },
  };
}
