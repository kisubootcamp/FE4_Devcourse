// 1.js
{
  // 생성자 함수
  // 객체를 생성할 때 사용하는 함수
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.greet = function () {
    return `${this.name} ${this.age}`;
  };

  // 생성자 함수 상속
  function Developer(name, age, skill) {
    Person.call(this, name, age);
    this.skill = skill;
  }
  Developer.prototype = Object.create(Person.prototype);
  Developer.prototype.constructor = Developer;

  const developer = new Developer("James", 20, "JavaScript");
  console.log(developer.greet());
}

// 2.js
{
  // class
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `${this.name} ${this.age}`;
    }
  }

  const person1 = new Person("John", 20);
  console.log(person1);
  console.log(person1.greet());

  class Developer extends Person {
    constructor(name, age, skill) {
      super(name, age);
      this.skill = skill;
    }
  }

  const dev = new Developer("James", 20, "JavaScript");
  console.log(dev);
  console.log(dev.greet());
}

console.log("-------------------------------------");
// 3.js
{
  // static
  // 정적 속성, 정적 메서드를 만들떄 사용
  // 인스턴스 속성
  // 인스턴스 메서드
  class Maths {
    static PI = 3.14;
    static add(n1, n2) {
      return n1 + n2;
    }
  }

  console.log(Maths.PI);
  console.log(Maths.add(10, 20));
}

console.log("-------------------------------------");
// 4.js
{
  // String, Number, Boolean, Data, Object, Function, Math, Regexp ...
}

console.log("-------------------------------------");
// 5.js
{
  const a = new String("Hello");
  console.log(a);

  // Number, Boolean, String
  // 래퍼 객체
  // 기본 자료형은 일시적으로 인스턴스화되어 표준 내장 객체의 메서드에 접근하고, 실행 후 해당 임시 객체는 버려진다. -> GC 로 들어감
  const b = "Hello";
  console.log(b.toUpperCase());
}

// 이벤트 루프와 실행 컨텍스트 간단 요약
// 1.	자바스크립트는 동기적으로 실행되고, 실행 컨텍스트는 콜 스택(LIFO)에 쌓인다.
// 2.	setTimeout, setInterval 등 비동기 함수는 Web API에서 처리된다.
// 3.	작업이 끝나면 콜백이 태스크 큐에 등록되고,
// 4.	이벤트 루프가 콜 스택이 비었을 때 해당 콜백을 스택으로 옮겨 실행한다.

// 마이크로태스크 큐
// 자바스크립트에서 비동기 작업 중에서도 "가장 우선적으로 실행돼야 하는 작업"들을 모아둔 큐
// 콜 스택이 비면, 태스크 큐 보다 먼저 마이크로태스크 큐를 싹 실행
// 마이크로태스크는 "다 끝날 때까지" 실행
// 무조건 다 처리하고 나서야 태스크 큐로 넘어갈 수 있음
// 아래의 코드가 태스크 큐 보다 우선순위가 높음
// Promise.then(), queueMicrotask(), MutationObserver
