{
  // this 개념
  // 전역 상태에서의 this는 window 객체 (자바스크립트가 그렇게 설계된 것) -> 암기
  // this -> this는 나를 호출한 객체 !!! (전역 상태에서의 this를 제외한 모든 this)
  console.log(this);

  function printThis() {
    console.log(this);
  }
  // window.printThis();와 같은 것 -> window는 생략 가능해서 보통 printThis();리고 호출함.
  // 즉, 나를 호출한 객체가 window이므로 this는 window를 가리킴.
  printThis();

  const obj = {
    name: "yubin",
    run: function () {
      console.log(this);
    },
  };
  obj.run(); // obj 객체가 출력됨.

  function run() {
    console.log(this);
  }
  const obj2 = {
    name: "yubin",
    run, // run: run, -> run : 단축 속성 프로퍼티
  };
  obj2.run(); // 함수가 밖에 선언되어있어도 결국 run이라는 메서드를 호출하는 건 obj 객체이므로 this는 obj 객체를 가리킴.

  const obj3 = {
    name: "yubin",
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this.name); // 프로그래머스
        console.log(obj.name); // yubin
      },
    },
  };
  obj3.smallObject.run(); // smallObject 객체가 출력됨. -> this는 나를 호출한 객체 !!

  const obj4 = {
    name: "yubin",
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this); // bind로 인해 이제 this는 smallObject를 가리키지 않고 { name: "유빈" } 객체를 가리킴.
      }.bind({ name: "유빈" }), // bind로 this가 가리키는 걸 바꿀 수 있음. bind는 한 번만 쓸 수 있음.
      run2: function () {
        console.log(this);
      }, // .bind(obj4)는 참조 불가능함. obj4 안에서는 거기가 obj4인지 모르기 때문. (호텔방 예시)
    },
  };
  obj4.smallObject.run();
  obj4.smallObject.run2(); // smallObject

  const user = {
    run: function () {}, // run과 run2는 같은 의미
    run2() {}, // 단축 함수 -> 실무에서 많이 쓰는 방식 (단, 단축 함수에서는 bind를 쓸 수 없음 !!!)
  };
  user.run(); // 호출하지 않으면 eslint 에러가 나서 그냥 호출함.

  // 객체를 완전 정복
  // -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
  // const obj1 = {};
  const obj5 = { name: "yubin", age: 26 };

  // 객체를 반복
  // 보통 for ... in 문을 가장 많이 사용함.
  for (let key in obj5) {
    console.log(obj5.key); // 마침표 연산자 -> 이건 key의 이름이 key라는 뜻임.
    console.log(obj5[key]); // 대괄호 연산자 -> 이렇게 사용해야 제대로 출력됨.
  }

  console.log(Object.keys(obj5));
  Object.keys(obj5).forEach((key) => {
    console.log(obj5[key]);
  });

  Object.entries(obj5).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });
}

{
  const obj = {};

  // 동적으로 객체의 속성 추가
  obj.name = "yubin";
  obj.age = 26;
  // obj["age"] = 26; // 이렇게 해도 되는데, 이럴 때는 현업에서 마침표 연산자를 더 많이 씀.

  // 동적으로 객체의 속성 삭제
  delete obj.name;

  console.log(obj);
}

{
  // 객체는 또 다른 객체
  // obj 객체의 run 메서드(함수 XXX)를 실행해주세요.
  // 메서드와 함수는 동의어지만, 객체의 속성으로 있는 함수는 보통 메서드라고 지칭함 !!
  const obj = {
    name: "yubin",
    address: {
      zipCode: 13131,
      addr: "서울시 용산구",
      addr2: "강남대로",
    },
    likeFoods: ["banana"],
    run: function () {
      console.log("run~!");
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj["address"]["zipCode"]);
  console.log(obj.likeFoods[0]);
}

{
  // 객체는 참조 자료형이므로, obj1에는 객체가 정의된 메모리 주소값이 들어감 (데이터가 직접적으로 들어가지 않음)
  const obj1 = { name: "yubin", age: 26, address: { zipCode: 1111 } };
  const obj2 = obj1; // 이건 데이터 자체를 복사하는 게 아니라 주소값을 복사하는 것임.

  obj2.name = "그렙";

  console.log(obj1); // 그래서 obj1의 name까지 바뀌는 것.
  console.log(obj2);

  const obj3 = { ...obj1 }; // 객체라는 새로운 껍데기({})가 씌워졌기 때문.
  obj3.name = "유빈";
  obj3.address.zipCode = 2222; // obj1의 zipCode도 같이 바뀌어버림. 내부의 객체의 주소값은 똑같기 때문.
  console.log(obj1);
  console.log(obj3);

  const obj4 = structuredClone(obj1); // 깊은 복사
  obj4.address.zipCode = 3333; // 이제 obj4의 zipCode만 바꿀 수 있음 !!
  console.log(obj1);
  console.log(obj4);
}

{
  // 구조 분해 할당 (비구조화 할당)
  const { name: uname, age } = { name: "bin", age: 26 };
  console.log(uname);
  console.log(age);
}

{
  // 객체 리터럴(Literal) 방법 -> 중괄호를 이용해서 정의하는 방법
  const person = {
    name: "bin",
    age: 26,
  };
  console.log(person);

  // 생성자 함수 -> 파스칼 케이스(첫 글자가 대문자인 것)로 쓰는 것이 관례
  // 파스칼 케이스, 스네이크 케이스, 케밥 케이스, 카멜 케이스
  // userObject -> 카멜 케이스 (변수명, 함수명)
  // user_object -> 스네이크 케이스
  // user-object -> 케밥 케이스 (파일명)
  // UserObject -> 파스칼 케이스 (생성자 함수, 클래스)

  // 생성자 함수는 함수처럼 매개변수를 받을 수 있음
  // ES5 2015까지 사용하던 방법
  // ES6부터는 클래스 문법을 사용함
  function Person(name, age) {
    // 여기에서 this가 가리키는 건 window 객체임
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(this);
    };
  }
  // new를 붙이면 자신의 함수를 객체 공간으로 만들어줌 (함수 내부의 공간을 객체화)
  // 따라서 this는 Person이라는 자기 자신을 가리키게 됨
  // Person 생성자 함수로 생성된 객체
  const person1 = new Person("bing", 26);
  person1.print(); // Person { name: 'bing', age: 26, print: [Function (anonymous)] }
  const person2 = new Person("yubin", 20);
  console.log(person1);
  console.log(person2);
  console.log(person1 instanceof Person); // 내 꼬리표가 Person이 맞는지 물어보는 것.
  console.log(person1.name);
  console.log(person1.age);
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

  const person1 = new Person("빙", 20);
  console.log(person1);
}

{
  // 객체의 불변성
  // Object.freeze() : 객체가 얼어버리는 것.
  // 값을 절대로 바꿀 수 없게 됨. 추가, 변경, 삭제 전부 불가능.
  // freeze는 은근히 많이 씀 !!
  const obj = Object.freeze({ name: "bin", age: 20 });
  obj.name = "binggg";
  delete obj.name;
  obj.gender = "female";
  console.log(obj);

  // Object.seal() : freeze의 순한 맛.
  // 객체의 추가, 삭제만 막음. 변경은 가능.
  const obj2 = Object.seal({ name: "bin", age: 20 });
  obj2.name = "binggg";
  delete obj2.name;
  obj2.gender = "female";
  console.log(obj2);

  // Object.preventExtensions() : 가장 순한 맛.
  // 객체의 추가만 막음. 변경과 삭제는 가능.
  const obj3 = Object.preventExtensions({ name: "bin", age: 20 });
  obj3.name = "binggg";
  delete obj3.age;
  obj3.gender = "female";
  console.log(obj3);
}
