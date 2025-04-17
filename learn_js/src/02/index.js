{
  //this 개념
  //this -> *this는 나를 호출한 객체이다*
  //전역 상태에서의 this는 window를 가리킨다

  //window 객체에 등록
  function printThis() {
    console.log(this); //window를 가리킨다
  }
  printThis(); // window.printThis();

  function run() {
    // this는 선언 위치가 중요하지 않다. 호출 된 위치가 중요하다
    console.log(this);
    console.log(this.name);
  }

  const obj = {
    name: "이준호",
    //단축 속성명
    run,
    // run: function () {
    //   console.log(this);
    //   console.log(this.name);
    // },
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this.name);
        //bind는 this가 가리키는 위치를 변경한다.
        //bind를 써도 상위 블록 스코프의 객체는 바라보지 않는다.
        //bind는 연속적으로 체이닝x -> .bind().bind() X
        //단축속성명에서는 바인드를 사용할 수 없다.
      }.bind({ name: "김성수" }),
      fc() {
        //bind 불가능
        console.log("단축 함수");
      },
    },
  };

  obj.run();
  obj.smallObject.run();
}

// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
{
  const obj1 = {};
  const obj2 = { name: "sucoding", age: 20 };

  console.log(obj1);

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
  const obj = Object.freeze({ name: "sucoding", age: 20 });

  // 객체의 추가/삭제 막음. 변경은 됨
  const obj2 = Object.seal({ name: "sucoding", age: 20 });

  // 객체의 추가만 막음
  const obj3 = Object.preventExtensions({ name: "sucoding", age: 20 });

  console.log(obj, obj2, obj3);
}

{
  //생성자 함수
  // new 키워드는 함수 안을 객체화 시킨다
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`${this.name}`, `${this.age}`);
    };
  }

  //파스칼 케이스(앞의 글자를 대문자로 쓰는 것)
  //매개변수를 전달 받을 수 있다는 특징을 가진다.
  const person1 = new Person("이준호", 28);
  const person2 = new Person("김성수", 24);

  person1.print();
  person2.print();

  console.log(person1);
  //instanceof 를 이용해서 자신을 생성 시킨 생성자 함수라고 한다.
  console.log(person1 instanceof Person);
}
