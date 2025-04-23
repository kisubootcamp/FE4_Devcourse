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

{
  let { name, age } = { name: "j", age: 31 };
  console.log(age);
  console.log(name);
}

{
  const gender = "male";
  const job = "CEO";

  const obj1 = { gender: gender, job: job };
  const obj2 = { gender: gender, job: job }; // 위에것을 축약해서 나타내기

  console.log(obj1);
  console.log(obj2);
}

{
  let obj = { name: "j", age: 31 };
  function Destructuring({ name, age }) {
    console.log(name);
    console.log(age);
  }
  Destructuring({ name: "kim", age: 30 });
}

{
  function first(second) {
    console.log(1);
    second();
  }
  function second() {
    console.log(2);
  }
  first(second);
}

{
  const promise = new Promise(function (resolve, reject) {
    resolve();
    reject();
  });
  promise
    .then(function () {})
    .catch(function () {})
    .finally(function () {});
}

{
  let loading = new Promise(function (resolve, reject) {
    const img = document.querySelector(".test");
    img.addEventListener("load", function () {
      resolve();
    });
    img.addEventListener("load", function () {
      reject();
    });
  });

  loading
    .then(function () {
      console.log("로딩성공");
    })
    .catch(function () {
      console.log("로딩실패");
    });
}

{
  let promise = new Promise((resolve, reject) => {
    $.get("경로").done(function (result) {
      console.log(resolve(result));
    });
  });
  promise.then(function (result) {
    console.log(result);
  });
}

{
  let promise = new Promise((resolve, reject) => {
    $.get("경로").done(function (result) {
      console.log(resolve(result));
    });
  });
  promise
    .then(function (result) {
      console.log(result);
      return new Promise((resolve, reject) => {
        $.get("경로").done(function (result) {
          console.log(resolve(result));
        });
      });
    })
    .then(function (result) {
      console.log(result);
    });
}

{
  async function calc() {
    return 1 + 1;
  }

  calc().then(function (result) {
    console.log("성공");
    console.log(result);
  });
}

{
  // {<button id="test">버튼</button>
  const promise = new Promise((resolve, reject) => {
    document.getElementById("test").addEventListener("click", function () {
      resolve("성공");
    });
  });

  async function buttonClick() {
    const result = await promise;
    console.log(result);
  }

  buttonClick();
}

{
  // 객체 자료 만들기
  const person = new Map();
  person.set("name", "kim"); // 객체의 키값
  person.set("age", 20); // 객체의 키의 value값
  console.log(person.get("age"));
}
