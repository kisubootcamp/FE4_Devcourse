// 객체
// -> key 와 value 로 구성된 속성(property)들의 집합
const obj1 = {};
const obj2 = { name: "sucoding", age: 20 };

// 객체 반복 ?
// for ..in 반복문을 많이 씀(실무에서는)
for (let key in obj2) {
  console.log(obj2[key]); // sucoding, 20, 대괄호 연산자 를 써야 올바르게 반복할 수 있음
  console.log(obj2.key); //마침표 연산자
}

console.log(Object.keys(obj2)); // key 값을 배열로 출력
Object.keys(obj2).forEach((key) => {
  console.log(obj2[key]); // sucoding, 20
});

Object.entries(obj2).forEach(([key, value]) => {
  console.log(`${key}:${value}`);
});

{
  const obj = {};
  // 동적으로 개체 속성 추가 . 현업에서는 마침표 연산자를 많이 씀
  obj.name = "sucoding";
  obj.age = 20;

  // 동적으로 개체 속성 삭제
  delete obj.name;
  console.log(obj);
}

{
  //객체는 또 다른 객체를 포함할 수 있음
  //obj 객체에 run 메서드(함수)를 실행해주세요. (객체 속성에 속해있는 함수)
  const obj = {
    name: "sucoding",
    address: {
      zipCode: 13131,
      addr: "세종시",
      addr2: "냥냥구",
    },
    likeFoods: ["banana"],
    run: function () {
      console.log("run~");
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj["address"]["zipCode"]);
  console.log(obj.likeFoods[0]);
}

{
  //  NOTE 객체 주소값에 대해 잘 이해해야함 !
  const obj1 = { name: "sucoding", age: 20 };
  const obj2 = obj1; // 주소값을 복사하는 의미 , 참조자료형은 데이터 자체를 갖고 있는게 아니라 데이터가 있는 주소값만 갖고 있음

  obj2.name = "그렙";
  console.log(obj2);

  //값이 바뀌지 않게 값을 복사하는 법 : spread 연산자
  const obj3 = { ...obj1 }; // 새로운 객체에 obj1 의 값을 복사해옴
  obj3.name = "sucoding";
  console.log(obj3);

  const obj4 = structuredClone(obj1); // 완전히 깊은 복사
  console.log(obj4);
}

{
  //구조분해할당 (비구조화 할당)
  const obj = { name: "sucoding", age: 20 };
  console.log(obj.name);
  console.log(obj.age);
  const { name: uname, age } = { name: "sucoding", age: 20 }; // 구조분해할당
  console.log(uname); // 이름 변경도 가능
  console.log(age);
}

{
  // 중괄호를 이용해 객체를 선언하는 방법을 - 객체 리터럴 NOTE
  const person = {
    name: "sucoding",
    age: 20,
  };
  //생성자 함수
  // 함수가 갖고 있는 특징을 그대로 가짐 -> 매개변수를 전달 받을 수 있음
  //함수를 사용해서 하려면 파스칼 케이스로 이름 만들기 (그것이 관례)
  //ES5 까지 사용하던 방법 (2015까지)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person1 = new Person("sucoding", 10); //new 를 붙이면 객체를 생성하여 this 가 person 을 참조함
  const person2 = new Person("그렙", 30); //new 를 붙이면 객체를 생성하여 this 가 person 을 참조함
  const person3 = new Person("냥구", 5); //new 를 붙이면 객체를 생성하여 this 가 person 을 참조함
  console.log(person1 instanceof Person); //true - Person 에서 생성한 객체가 맞는지 확일 할 때 instanceof NOTE
  console.log(person1.name);
  console.log(person2.name);
  console.log(person3.name);
  console.log(person1.age);
}

{
  // ES6 ~ class 문법
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
  //객체의 불변성 - 한번 정의한 객체를 바꾸지 못하게
  // Object.freeze({}) : 절대 바뀌지 않아야할 중요한 값 , 한번 냉동된건 해동할 수 없다, 추가 변경 삭제 불가 NOTE
  // api 의 설정값을 유지해야할때
  const obj = Object.freeze({ name: "sucoding", age: 20 });
  obj.name = "john";
  delete obj.name;
  obj.gender = "male";
  console.log(obj);

  // Object.seal({}) : 객체의 추가, 삭제는 막음. 변경은 가능 NOTE
  const obj1 = Object.seal({ name: "sucoding", age: 20 });
  obj1.name = "김기수"; //변경
  obj1.gender = "male"; // 추가 안됨
  delete obj1.name; // 삭제 안됨
  console.log(obj1);

  // Object.preventExtensions({}) : 객체의 주가만 막음 NOTE
  const obj2 = Object.preventExtensions({ name: "sucoding", age: 20 });
  obj2.name = "kkk"; //변경
  delete obj2.age; //삭제
  obj2.gender = "male"; //추가 안됨
  console.log(obj2);
}
