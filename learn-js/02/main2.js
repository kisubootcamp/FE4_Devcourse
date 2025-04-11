// 객체를 완전 정복
// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
const obj1 = {};
const obj2 = { name: "sucoding", age: 20 };

// 객체를 반복?
for (let key in obj2) {
  //   console.log(obj2.key); // 마침표 연산자 -> X
  console.log(obj2[key]); // 대괄호 연산자
}

Object.keys(obj2).forEach((key) => {
  console.log(obj2[key]);
});

Object.entries(obj2).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

{
  const obj = {};

  // 동적으로 객체의 속성 추가
  obj.name = "sucoding";
  obj["age"] = 20;

  // 동적으로 객체의 속성 삭제
  delete obj.name;

  console.log(obj);
}

{
  // 객체는 또 다른 객체를 포함할 수 있음
  // obj 객체에 run 메서드(함수)를 실행해주세요.
  const obj = {
    name: "sucoding",
    address: {
      zipCode: 13131,
      addr: "서울시 용산구",
      addr2: "강남대로",
    },
    likeFoods: ["banana"],
    run: function () {
      console.log("run~!!");
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj["address"]["zipCode"]);
  console.log(obj.likeFoods[0]);
}

{
  const obj1 = { name: "sucoding", age: 20, address: { zipcode: 1111 } };
  //   const obj2 = obj1; // 주소값 복사
  //   const obj2 = { ...obj1 }; // 새로운 객체 but 중첩 객체까지 복사 X
  const obj2 = structuredClone(obj1); // 중첩 객체까지 복사

  obj2.name = "그랩";
  obj2.address.zipcode = 2222;

  console.log(obj1);
  console.log(obj2);
}

{
  // 구조 분해 할당(비구조화 할당)
  const { name: uname, age } = { name: "sucoding", age: 20 };
  console.log(uname);
  console.log(age);
}

{
  // 객체 리터럴(Literal)
  // 생성자 함수 -> 파스칼 케이스

  // 파스칼 케이스, 스케이크 케이스, 케밥 케이스, 카멜 케이스
  // userObject -> 카멜 (변수명, 함수명)
  // user_object -> 스네이크
  // user-object -> 케밥 (파일명)
  // UserObject -> 파스칼 (생성자, 클래스)

  // ES5 2015 <

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(this);
    };
  }

  const person1 = new Person("sucoding", 20);
  person1.print();

  const person2 = new Person("그랩", 50);

  console.log(person1);
  console.log(person2);
  console.log(person1 instanceof Person);
  console.log(person2 instanceof Person);
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

  const person1 = new Person("John", 30);
  console.log(person1);
}

{
  // 객체의 불변성 -> 삭제, 추가, 변경 모두 안됨
  const obj = Object.freeze({ name: "sucoding", age: 20 });
  obj.name = "john";
  delete obj.name;
  obj.gender = "male";
  console.log(obj);

  // 객체의 추가/삭제 막음. 변경은 됨
  const obj2 = Object.seal({ name: "sucoding", age: 20 });
  obj2.name = "김기수";
  obj2.gender = "male";
  delete obj2.name;
  console.log(obj2);

  // 객체의 추가만 막음
  const obj3 = Object.preventExtensions({ name: "sucoding", age: 20 });
  obj3.name = "kkk";
  delete obj3.age;
  obj3.gender = "male";
  console.log(obj3);
}
