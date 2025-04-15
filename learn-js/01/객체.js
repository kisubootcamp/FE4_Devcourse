// 객체
// 키(key)와 값(value)으로 구성된 속성(property)들의 집합
// const obj1 = {};
const obj2 = { name: "sucoding", age: 40 };

// 객체를 반복
for (let key in obj2) {
  console.log(obj2.key); // 마침표 연산자
  console.log(obj2[key]); // 대괄호 연산자
}

Object.keys(obj2).forEach((key) => {
  console.log(obj2[key]);
});

Object.entries(obj2).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});

{
  const obj = {};

  // 동적으로 객체의 속성 추가
  obj.name = "김보민";
  obj.age = 19;

  delete obj.name; // 동적으로 객체의 속성 삭제
  console.log(obj);
}
{
  // 객체는 또 다른 객체
  const obj = {
    name: "김보망",
    address: {
      zipCode: 131313,
      addr1: "서울시 중랑구",
      addr2: "망우로",
    },
    likeFoods: ["coffee"],
    // 객체 속성에 함수값이 들어있다면 '메서드'라고 칭한다.
    run: function () {
      console.log("run~!");
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj["address"]["zipCode"]);
  console.log(obj.likeFoods[0]);
}
{
  const obj1 = { name: "sucoding", age: 20, address: { zipCode: 1111 } }; //주소값 지정됨
  const obj2 = obj1; // 주소값을 복사
  const obj3 = { ...obj1 };
  const obj4 = structuredClone(obj1); //깊은복사

  obj2.name = "그랩";
  obj3.name = "왕왕";
  obj3.address.zipCode = 2222; // 중접되어있는 객체는 깊은복사가 되지 않기 때문에 참조값이 같이 바뀜

  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
  console.log(obj4);
}
{
  // 구조 분해 할당 (비구조화 할당)
  const { name: name, age } = { name: "보민", age: 20 };
  console.log(name);
  console.log(age);

  const person = {
    name: "bomin",
    age: 30,
  };
  console.log(person);
}
{
  //객체 리터럴(Literal)
  // 생성자 함수 -> 파스칼 케이스로 생성하는 것이 관례
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`${this.name}, ${this.age}`);
    };
  }
  const person1 = new Person("sucoding", 20);
  const person2 = new Person("그렙", 50);
  console.log(person1 instanceof Person); // 출처가 Person이 맞는지 확인할 수 있음 (true/false)
  console.log(person1.name);
  console.log(person2);
}

// userObject -> 카멜 케이스
// user_object -> 스네이크 케이스
// user-object -> 케밥 케이스
// UserObject -> 파스칼 케이스

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
  const person1 = new Person("whs", 30);
  console.log(person1);
}
{
  // 객체의 불변성
  // Object.freeze()를 적용하면 변경, 삭제, 추가 안됨.
  const obj = Object.freeze({ name: "coco", age: 20 });
  obj.name = "home";
  delete obj.name;
  console.log(obj);

  // Object.seal() 변경만 가능하고 추가, 삭제 불가
  const obj2 = Object.seal({ name: "coco", age: 20 });
  obj2.name = "김기수";
  obj2.gender = "male";
  delete obj2.name;
  console.log(obj2);

  // Object.preventExtensions() 객체의 추가만 불가
  const obj3 = Object.preventExtensions({ name: "coco", age: 20 });
  obj3.name = "lee";
  delete obj3.age;
  console.log(obj3);
}
