{
  // 생성자 함수 constructor function : 객체를 생성해내는 함수
  // 자바스크립트는 프로토타입(prototype) 기반의 언어이다.
  // 생성자함수는 파스칼케이스
  function Car(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  // new : 함수를 호출할 때 객체 형태로 반환하게 해주는 키워드
  // 인스턴스 : 생성자 함수로 찍어낸 객체를 가리키는 용어
  const car1 = new Car("bmw", 200);
  Car.prototype.tome = "힘내자";
  console.dir(car1.__proto__.tome); // 힘내자

  // 프로토타입 체인 : 인스턴스에서
  // 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
  console.dir(car1.tome); // 힘내자(프로토타입 체인)

  Car.prototype.maxSpeed = function () {
    return `Max Speed : ${this.speed * 2}`;
  };
  console.log(car1.maxSpeed());
}

{
  // 자바스크립트는 함수라면 1:1로 관계를 맺고 있는 공간이 있다.
  // 이 공간을 prototype
  // 프로토타입 <-> constructor (서로를 참조함)
}

{
  function Machine(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
      console.log(`안녕하세요 ${this.name}입니다.`);
    };
  }
  Machine.prototype.gender = "male";

  const student1 = new Machine("Kim", 17);
  student1.sayHi();
  console.log(student1.gender);
  const student2 = new Machine("Park", 15);
  console.log(student2);
}

{
  class Parent {
    constructor() {
      (this.name = "kim"), (this.age = 34);
      this.sayBye = function () {
        console.log("Bye");
      };
    }
    sayHi() {
      console.log("hello");
    }
  }
  const child = new Parent();
  console.log(child);
  child.sayHi();
  child.sayBye();
}

{
  class GrandPa {
    constructor(name) {
      this.firstName = "kim";
      this.name = name;
    }
    sayHi() {
      console.log("안녕");
    }
  }
  class Father extends GrandPa {
    constructor(name) {
      super(name); // 부모 class 의 constructor를 의미
      this.age = 50;
    }
    sayBye() {
      console.log("bye");
      super.sayHi(); // 부모 class 의 prototype에 있는 sayHi를 의미
    }
  }

  const grandpa = new GrandPa("철수");
  console.log(grandpa);
  const father = new Father("민수");
  console.log(father);
  father.sayBye();
}

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get nextAge() {
      return this.age + 1;
    }
    set setAge(age) {
      this.age = age;
    }
  }
  const person = new Person("민수", 23);
  console.log(person.nextAge); // getter랑 setter는 () 안써주기
  person.setAge = 34; //setter는 값을 넣어주기
  console.log(person);
}
