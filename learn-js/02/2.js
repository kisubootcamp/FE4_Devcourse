// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
{
  //const obj1 = {};
  const obj2 = { name: "sucoding", age: 25 };

  // 객체를 반복?
  for (let key in obj2) {
    console.log(obj2.key); // 마침표 연산자 -> unknown x.
    console.log(obj2[key]); //대괄호 연산자 -> 이렇게 써야함
  }

  Object.keys(obj2).forEach((key) => {
    console.log(obj2[key]);
  });

  Object.entries(obj2).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

{
  const obj = {};

  // 동적으로 객체의 속성 추가
  obj.name = "suco";
  obj.age = 20;

  // 동적으로 객체의 속성을 삭제
  delete obj.name;
  console.log(obj);
}

{
  // 객체는 또 다른 객체
  // obj 객체에 run 메서드(함수)를 실행해주세요.
  const obj = {
    name: "suco",
    address: {
      // zipCode: 13131,
      // addr: "서울시 용산구",
      // addr2: "강남대로".
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
  const obj1 = { name: "sucoding", age: 20, addr: { zipCode: 1111 } };
  const obj2 = { ...obj1 }; // 주소 값 복사
  //const obj2 = structuredClone(obj1); // 깊은 복사

  obj2.name = "그렙";
  obj2.addr.zipCode = 2222;

  console.log(obj1);
  console.log(obj2);
}

{
  // 구조 분해 할당
  const { name: uname, age } = { name: "sucoding", age: 20 };
  console.log(uname);
  console.log(age);
}

{
  // 객체 리터럴(Literal)
  // 생성자 함수 -> 파스칼 케이스, 스케이크 케이스, 케밥 케이스, 카멜 케이스
  // userObject -> 카멜 케이스 (변수명, 함수명)
  // user_Object -> 스케이크 케이스
  // user-Object -> 케밥 케이스 (파일명)
  // UserObject -> 파스칼 케이스 (생성자, 클래스)
  function Person() {
    this.name = "kyo";
    this.age = 25;
  }
  const Person1 = new Person(); // new : 자신의 스코프 = 함수 내부가 객체화 됨.
  console.log(Person1 instanceof Person); // instanceof : 꼬리표 너 맞아? 맞으면 true
  console.log(Person1.name);
  console.log(Person1.age);
}
{
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`${this.name}, ${this.age}`);
    };
  }
  const Person1 = new Person("kyo", 25);
  Person1.print();

  const Person2 = new Person("eun", 20);
  Person2.print();

  console.log(Person1);
  console.log(Person2);
  console.log(Person1 instanceof Person);
  console.log(Person2 instanceof Person);
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

  const Person1 = new Person("lee", 30);
  console.log(Person1);
}

{
  // 객체의 불변성
  // freeze : 강함
  // 객체의 변경 x, 삭제 x, 추가 x
  const obj = Object.freeze({ name: "kyo", age: 25 });
  obj.name = "eun";
  delete obj.name;
  obj.gender = "female";
  console.log(obj);

  // seal : 보통
  // 객체의 변경 o, 삭제 x, 추가 x
  const obj2 = Object.seal({ name: "kyo", age: 25 });
  obj2.name = "eun";
  delete obj2.name;
  obj2.gender = "female";
  console.log(obj2);

  // preventExtensions : 약함
  // 객체의  변경 o, 삭제 o, 추가 x
  const obj3 = Object.preventExtensions({ name: "kyo", age: 25 });
  obj3.name = "eun";
  delete obj3.name;
  obj2.gender = "female";
  console.log(obj3);
}
