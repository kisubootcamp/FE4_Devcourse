// 객체
// JS에서 객체는 키(key)와 값(value)으로 구성된 속성(property)들의 집합

{
  const obj1 = {};
  const obj2 = { name: "lee", age: 29 };

  // 객체를 반복하는법
  for (let key in obj2) {
    console.log(obj2[key]); // 마침표 연산자 사용 금지!!!
  }

  console.log(Object.keys(obj2));

  Object.entries(obj2).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

{
  const obj = {};
  obj.name = "lee"; // 마침표 연산자를 통해 동적으로 추가
  obj.age = 29;

  delete obj.name; // 동적으로 객체의 속성 삭제
  console.log(obj);
}

{
  // 객체는 또 다른 객체를 포함할 수 있다.
  // obj객체에 run 메서드(함수) 실행
  const obj = {
    name: "Lee",
    address: {
      addr: "군포시",
      addr2: "산본",
    },
    likeFoods: ["banana"],
    run: function () {
      console.log("running");
    },
  };
  console.log(obj.address.addr); // 현업에서는 마침표 연산자로 씀
  console.log(obj["address"]["addr"]);
}

{
  const obj1 = { name: "Ji", age: 20, addr: { zipcode: 1111 } }; // 객체: 참조 자료형 / 중첩된 객체는 깊은 복사가 되지 않는다
  const obj2 = { ...obj1 }; // 새로운 객체로 할당됨
  const obj3 = structuredClone(obj1); // 객체까지 깊은 복사  최근에는 이 메서드를 적극 사용중이다.

  obj2.name = "Yoon";
  obj2.addr.zipcode = 2222;
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
}
// 참조 자료형은 객체가 직접적으로 들어가는 것이 아니라 객체가 다른 곳에 정의가 된 후 그 메모리의 주소값이 들어간다.

{
  // 구조 분해 할당
  const { name: naem, age } = { name: "Lee", age: 20 };
  console.log(naem);
  console.log(age);
}

{
  const person = {
    name: "lee",
    age: 29,
  }; // 객체 리터럴(Literal): 중괄호를 이용하여 객체를 선언하는 방법

  function Person() {
    this.name = "Lee"; // this는 window를 가리킨다
    this.name = 20;
  } // 함수로 객체를 선언할때는 파스칼 케이스로 선언한다.
  const person1 = new Person(); // new: 자신의 스코프를 객체로 만들어준다
  console.log(person1 instanceof Person); // Person 생성자 함수로 생성된 객체 / instanceof는 해당 생성자 함수도 생성된 것인지 확인한다. 맞으면 true, 틀리면 false이다
  // 출력에 어떤 함수를 통해 만들어진 객체인지 함께 출력됨

  // 생성자 함수는 함수의 특성을 가지고 있기 때문에 매개변수를 받을 수 있다.
}

// 생성자 함수로 객체를 만들어내는것은 2015년도까지 주로 사용했고 ES6부터는 class로 대체됨

// userObject -> 카멜케이스(변수명, 함수명)
// user_object
// user-object -> 케밥 케이스 (파일명)
// UserObject -> 파스칼 케이스(생성자, 클래스)

{
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`${this.name}, ${this.age}`);
    };
  }

  const person1 = new Person("Lee", 20);
  person1.print();
  const person2 = new Person("Ji", 29);

  console.log(person1);
  console.log(person2);
  console.log(person1 instanceof Person);
  console.log(person2 instanceof Person);
}

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    print() {
      console.log(`${this.name}, ${this.age}`);
    }
  }

  const person1 = new Person("yo", 10);

  console.log(person1);
}

// 생성자 함수 & 클래스 문법은 정확하게 알고 넘어가야 한다.

{
  // 객체의 불변성 - 삭제, 추가, 변경 불가 / 제일 많이 사용됨
  const obj = Object.freeze({ name: "lee", age: 20 }); // freeze로 객체의 요소를 변경하지 못하도록 설정할 수 있다.
  // 객체의 추가, 삭제는 막고 변경은 가능함
  const obj2 = Object.seal({ name: "lee", age: 20 }); // freeze로 객체의 요소를 변경하지 못하도록 설정할 수 있다.
  // 한번 freeze된 건 다시 풀 수 없다.
  // 객체의 추가만 막음
  const obj3 = Object.preventExtensions({ name: "lee", age: 20 }); // freeze로 객체의 요소를 변경하지 못하도록 설정할 수 있다.
  // 수정을 막는 메서드는 위로 갈수록 강력해진다
  obj.name = "danny";
  obj2.name = "genny";
  obj3.name = "john";
  delete obj.name;
  delete obj2.name;
  delete obj3.age;
  obj.gender = "male";
  obj2.gender = "female";
  obj3.gender = "male";
  console.log(obj);
  console.log(obj2);
  console.log(obj3);
}
