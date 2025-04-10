//this  : this 는 나를 호출한 객체이다

// function printThis() {
//   console.log(this);
// }

// window.printThis();

// const obj = {
//   name: "eunseo",
//   run: function () {
//     console.log(this);
//   },
// };

// obj.run();

const obj = {
  name: "eunseo",
  smallObject: {
    name: "snow",
    run: function () {
      console.log(this.name); //설
      console.log(obj.name); //은서
    }
      .bind({ name: "은서짱" }) //바인드 되면 다른 this 안된다~
      .bind({}),
  },
};

obj.smallObject.run();

//스코프 : 실행 컨텍스트 내부의 영역
// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
{
  const obj1 = {};
  const obj2 = { name: "sucoding", age: 20 };

  // 객체를 반복?
  for (let key in obj2) {
    console.log(obj2[key]); // 대괄호 연산자
  }

  Object.keys(obj2).forEach((key) => {
    console.log(obj2[key]);
  });

  Object.entries(obj2).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });
}

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
  // 객체는 또 다른 객체
  // obj 객체에 run 메서드(함수)를 실행해주세요.
  const obj = {
    name: "eunseo",
    address: {
      zipCode: 12345,
      addr: "인천시 부평구",
      addr2: "인생탄탄대로",
    },
    likeFoods: ["banana"],
    run: function () {
      console.log("run~!🍌");
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj["address"]["zipCode"]);
  console.log(obj.likeFoods[0]);
}

{
  const obj1 = { name: "eunseo", age: 25, address: { zipcode: 1111 } };
  const obj2 = structuredClone(obj1); // 주소값

  obj2.name = "그렙";
  obj2.address.zipcode = 2222;

  console.log(obj1);
  console.log(obj2);
}

{
  // 구조 분해 할당 (비구조화 할당)
  const { name: uname, age } = { name: "eunseo", age: 25 };
  console.log(uname);
  console.log(age);
}

{
  // 객체 리터럴(Literal)
  // 생성자 함수 -> 파스칼 케이스, 스네이크 케이스, 케밥 케이스, 카멜 케이스
  // userObject -> 카멜케이스 (변수명, 함수명)
  // user_object -> 스네이크 케이스
  // user-object -> 케밥 케이스 (파일명)
  // UserObject -> 파스칼케이스 (생성자, 클래스 )
  // ES5 2015 <
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`${this.name}, ${this.age}`);
    };
  }
  const person1 = new Person("eunseo", 25);
  person1.print();

  const person2 = new Person("사과", 15);
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

  const person1 = new Person("존", 30);
  console.log(person1);
}

{
  // 객체의 불변성 - 삭제, 추가 , 변경
  const obj = Object.freeze({ name: "eunseo", age: 20 });

  // 객체의 추가/삭제 막음. 변경은 됨
  const obj2 = Object.seal({ name: "eunseo", age: 20 });

  // 객체의 추가만 막음
  const obj3 = Object.preventExtensions({ name: "eunseo", age: 20 });
}
