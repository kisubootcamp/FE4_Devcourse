{
  // this 개념
  console.log(this); //전역상태에서 this는 윈도우 ;암기
  //this는 나를 호출한 객체이다
  function printThis() {
    console.log("new");
    console.log(this); //
  }
  window.printThis(); //window가 나를 호출한 객체

  const obj = {
    name: "sucoding",
    run: function () {
      console.log(this); //obj
    },
  };
  obj.run(); //obj

  //단축 속성명
  function run() {
    console.log(this);
  }
  const obj2 = {
    name: "sucoding",
    run,
  };
  obj2.run(); //obj2

  const obj3 = {
    name: "sucoding",
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this);
        console.log(this.name); //프로그래머스 만약 smallObject안에 name없으면 obj3로 타고올라가지 못함
        console.log(obj3.name); //수코딩
      },
    },
  };
  obj3.smallObject.run(); //{name:"프로그래머스",run} 형태로 smallObject가 나옴

  const obj4 = {
    name: "sucoding",
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this); //수코딩 잘생김
      }.bind({ name: "수코딩 잘생김" }), //obj4 사용 불가(내부에서는 이 객체의 이름을 알지 못함)
    },
  };
  obj4.run();

  //단축 함수
  const user = {
    run: function () {}, //이렇게 형태를 바꿔서 bind 사용해야함함
    run2() {}, //에서는 bind사용 불가
  };

  //스코프? 실행 컨텍스트 내부의 영역
  //전역 실행 컨텍스트
  // 실행 컨텍스트
}
{
  //객체
  //->키(key)와 값(value)로 구성된 속성(property)들의 집합
  const obj11 = {};
  const obj22 = { name: "sucoding", age: 20 };

  //객체를 반복?
  for (let key in obj22) {
    //console.log(obj2.key); //마침표 연산자 ; key속성이 없으므로 에러
    console.log(obj22[key]); //대괄호 연산자
  } //가장 많이 사용

  Object.keys(obj22).forEach((key) => {
    console.log(obj22[key]);
  });

  Object.entries(obj22).forEach(([key, value]) => {
    console.log(`${key}:${value}`);
  });
}

{
  const obj = {};

  //동적으로 객체 속성 추가
  obj.name = "sucoding";
  obj["age"] = 20;

  //동적으로 객체의 속성 삭제
  delete obj.name;
  console.log(obj);
}

{
  //객체는 또 다른 객체
  //obj 객체에 run메서드(함수)를 실행해주세요(객체에서는 함수보다는 메서드)
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
  const obj2 = obj1; //주소값=> 값 하나의 주소를 두 변수가 가지고 있음
  const obj2 = { ...obj1 }; //obj1와 주소값은 다르고 내용만 복사됨=> 값 변경해도 obj1에 영향 x

  obj2.address.zipcode = 2222; //address의 객체는 또 주소값을 가지므로 obj2와 obj1의 address값은 동일
  const obj2 = structuredClone(obj1); //=>깊은 복사
  obj2.name = "그렙";
  console.log(obj1); //동일하게 변경
  console.log(obj2); //동일하게 변경
}

//기본자료형(값) vs 참조자료형(값의 메모리주소값)

{
  //구조 분해 할당(비구조화 할당)
  const { name: uname, age } = { name: "sucoding", age: 20 };
  console.log(name);
  console.log(age);
}

{
  //객체 리터럴(Literal)
  //생성자 함수->파스칼 케이스, 스네이크 케이스, 케밥 케이스, 카멜 케이스
  //userObject -> 카멜케이스(변수명,함수명)
  //user_object -> 스네이크케이스
  //user-object -> 케밥케이스(파일명)
  //UserObject -> 파스칼케이스(생성자,클래스)
  function Person(name, age) {
    this.name = name; //this는 window의미했는데 new가 붙어서 함수 자기자신을 의미
    this.age = age;
    this.print = function () {
      console.log(`${this.name}, ${this.age}`);
    };
  }
  const person1 = new Person("sucoding", 20); //new가 함수내부를 객체화시킴
  person1.print();
  const person2 = new Person("그렙", 50);
  console.log(person1);
  console.log(person2);
  console.log(person1 instanceof Person); //person1이 Person의 꼬리표 맞는지지
  console.log(person2 instanceof Person);
}

//생성자 함수에서 발전->클래스
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    print() {
      console.log(`${this.name},${this.age}`);
    }
  }

  const person1 = new Person("존", 30);
  console.log(person1);
}

{
  //객체의 불변성-삭제,추가,변경
  const obj = Object.freeze({ name: "sucoding", age: 20 }); //freeze->값 불변
  obj.name = "john"; //x
  delete obj.name; //x
  obj.gender = "male"; //x
  console.log(obj);

  //객체의 추가/삭제 막음. 변경은 가능
  const obj2 = Object.seal({ name: "sucoding", age: 20 });
  obj2.name = "김기수";
  obj2.gender = "male"; //x
  delete obj2.name; //x
  console.log(obj2);

  //객체의 추가만 막음
  const obj3 = Object.preventExtensions({ name: "sucoding", age: 20 });
  obj3.name = "kkk";
  delete obj3.age;
  obj.gender = "male"; //x
  console.log(obj3);
}
