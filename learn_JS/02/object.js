// this
// 전역 상태에서의 this : window 객체
console.log(this);

// 그 외의 this는 나를 호출한 객체이다.
function printThis() {
  console.log(this);
}
printThis();

// 나를 호출한 것... 조금은 어렵다
const obj = {
  name: "Jeong",
  run: function () {
    console.log(this);
  },
};
obj.run();

{
  //   function run() {
  //     console.log(this);
  //   }

  const obj = {
    name: "Jeong",
    // 단축 속성명
    // 원래 이렇게 적어야 하지만
    // run: run, 이게 똑같으면 그냥 하나만 적어도 된다.
    //run,
    smallObj: {
      name: "프로그래머스",
      run: function () {
        console.log(this);
      },
    },
  };
  obj.smallObj.run();
}

{
  // 객체
  // 키와 값value으로 구성된 속성property들의 집합

  // const obj1 = {};
  const obj2 = { name: "gildong", age: 29 };

  for (let key in obj2) {
    console.log(obj2.name);
    console.log(obj2[key]);
  }

  // key를 다 찾아서 출력해줌
  console.log(Object.keys(obj2));
  Object.keys(obj2).forEach((key) => {
    console.log(obj2[key]);
  });
  //key-value 쌍을 배열로 반환
  Object.entries(obj2).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });

  console.log("--------------------------");
}

{
  // 동적으로 객체에 속성 추가
  const obj = {};
  obj.name = "Jeong";
  obj.age = 20;
  console.log(obj);

  // 동적으로 객체의 속성 삭제
  delete obj.name;
  console.log(obj);
}

{
  // 객체는 또 다른 객체, 함수, 배열 등등,,, 모든 걸 다 포함
}

// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
{
  // const obj1 = {};
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
    name: "sucoding",
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
  const obj1 = { name: "sucoding", age: 20, address: { zipcode: 1111 } };
  const obj2 = structuredClone(obj1); // 주소값

  obj2.name = "그렙";
  obj2.address.zipcode = 2222;

  console.log(obj1);
  console.log(obj2);
}

{
  // 구조 분해 할당 (비구조화 할당)
  const { name: uname, age } = { name: "sucoding", age: 20 };
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
  const person1 = new Person("sucoding", 20);
  person1.print();

  const person2 = new Person("그렙", 50);
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
  // const obj = Object.freeze({ name: "sucoding", age: 20 });
  // 객체의 추가/삭제 막음. 변경은 됨
  // const obj2 = Object.seal({ name: "sucoding", age: 20 });
  // 객체의 추가만 막음
  // const obj3 = Object.preventExtensions({ name: "sucoding", age: 20 });
}
