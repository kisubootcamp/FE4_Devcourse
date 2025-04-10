// this 개념
// this -> this는 나를 호출한 객체이다
// console.log(this); // 전역 상태에서의 this는 Window 객체이다  ( 암기 )
// 단축 속성명
// 단축 함수 -> bind 사용 불가

const obj = {
  name: "jungyu",
  smallObject: {
    name: "프로그래머스",
    run: function () {
      console.log(this.name); // 프로그래머스
    }.bind({ name: "park" }),
    run2() {
      console.log(this);
    },
  },
};

obj.smallObject.run();
obj.smallObject.run2();

// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
// const obj1 = {};
const obj2 = { name: "jungyu", age: 20 };

// 객체를 반복?
for (let key in obj2) {
  console.log(obj2[key]); // 대괄호 연산자
}

Object.keys(obj2).forEach((key) => {
  console.log(obj2[key]);
});

Object.entries(obj2).forEach(([key, value]) =>
  console.log(`key: ${key}, value: ${value}`)
);

{
  // 동적으로 객체의 속성 추가
  const obj = {};
  obj.name = 20;
  obj["age"] = 20;

  // 동적으로 객체의 속성 삭제
  delete obj.name;

  console.log(obj);
}

{
  // 객체의 또 다른 객체
  // obj 객체의 run 메서드를 실행해주세요.
  const obj = {
    name: "jungyu",
    address: {
      zipCode: 13133,
      addr: "서울시 강동구",
      addr2: "고덕로",
    },
    likeFoods: ["apple"],
    run: function () {
      console.log("run~!");
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj["address"]["zipCode"]);
  console.log(obj.likeFoods[0]);
}

{
  const obj1 = { name: "jungyu", age: 20, address: { zipCode: 1111 } };
  const obj2 = obj1;

  obj2.address.zipCode = 2222;

  console.log(obj1);
  console.log(obj2);
}

{
  // 구조 분해 할당 (비구조화 할당)
  const { name: uname, age } = { name: "jungyu", age: 20 };
  console.log(uname);
  console.log(age);
}

{
  // 객체 리터럴 (Literal)
  // new라는 키워드는 객체화 시킴
  // 생성자 함수 -> 파스칼 케이스
  // Person 생성자 함수로 생성된 객체
  function Person() {
    this.name = "jungyu";
    this.age = 20;
  }
  const person1 = new Person();
  console.log(person1);
  const person = {
    name: "jungyu",
    age: 20,
  };
  console.log(person);
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

  const person1 = new Person("john", 30);
  console.log(person1);
}

{
  // 객체의 불변성
  const obj = Object.freeze({ name: "jungyu", age: 20 });
  obj.name = "john";
  console.log(obj);
  // 객체의 추가/삭제 막음. 변경은 됨
  const obj2 = Object.seal({ name: "jungyu", age: 20 });
  obj2.name = "박준규";
  obj2.gender = "male";
  delete obj2.name;
  console.log(obj2);

  // 객체의 추가만 막음
  const obj3 = Object.preventExtensions({ name: "jungyu", age: 20 });
  obj3.name = "park";
  delete obj3.age;
  obj3.gender = "male";
  console.log(obj3);
}
