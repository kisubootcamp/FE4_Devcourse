{
  // 객체 완전 정복
  // this
  // 전역 상태의 this -> window
  console.log(this);
  console.log("---------------------------------");
  // this -> 나를 호출한 객체

  function printThis() {
    console.log(this);
  }
  // 전역의 위치에서 호출한것이므로 this 는 window 임
  printThis();

  // function run() {
  //   console.log(this);
  // }

  const obj = {
    name: "PSY",
    smallObject: {
      name: "Programmers",
      run: function () {
        console.log(this);
      }.bind({ name: "수코딩 구독 좋아요" }), // this 가 가리키는 대상을 bind 안의 내용으로 교체됨. 단, bind 여러번은 안통함
      run2() {
        console.log(this);
      }, // 단축 함수에서 bind 는 오류난다.
    },
  };

  obj.smallObject.run();
  obj.smallObject.run2();

  // 단축 함수
  const user = {
    run() {}, // 함수 단축해서 사용
    run2: function () {},
  };
  console.log(user);
}
console.log("---------------------------------");
{
  // 객체
  // -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
  const obj2 = {
    name: "PSY", // "key": "value" 조합들의 집합
  };

  // 객체 반복
  for (let key in obj2) {
    console.log(obj2[key]); // 대괄호 연산자
    console.log(obj2.key); // 마침표 연산자 -> 주의! 이렇게 하면 key 라는 속성을 찾아감 결과값 -> undefined
  }

  console.log("---------------------------------");

  Object.keys(obj2).forEach((key) => {
    // Object.keys(obj) -> 객체의 key 값을 찾아서 배열로 반환
    console.log(obj2[key]);
  });

  Object.entries(obj2).forEach((key, value) => {
    console.log(`${key}: ${value}`);
  });
}
console.log("---------------------------------");
{
  const obj = {};
  // 동적으로 객체의 속성 추가
  obj.name = "PSY";
  obj.age = 20;

  // 동적 삭제
  delete obj.age;

  console.log(obj);
}
console.log("---------------------------------");
{
  // 객체는 또 다른 객체
  // obj 객체에 run 메서드(함수)를 실행해주세요.
  const obj = {
    name: "PSY",
    address: {
      zipCode: 13131,
      addr: "서울",
      addr2: "문정로",
    },
    likeFoods: ["banana"],
    run: function () {
      console.log("튀어 ~");
    },
  };

  console.log(obj.address.zipCode);
  console.log(obj.likeFoods[0]);
}
console.log("---------------------------------");
{
  //
  const obj1 = { name: "PSY", age: 20 };
  const obj2 = obj1; // 객체는 참조 자료형 이므로 이 코드 처럼 선언 해두면 저장된 메모리의 번호를 저장함. 그래서 obj2 를 변경하면 Obj1 의 데이터가 같이 변경됨
  obj2.age = 12435;
  console.log(obj1);
  console.log(obj2);

  // 안바뀌게 하는것
  const obj3 = { ...obj1 }; // 스프레드 연산자 사용 -> 새로운 객체 안에 선언했기 때문에 복사가 진행됨.
  obj3.age = 13;
  console.log(obj3);

  const obj4 = { name: "PSY", address: { zipCode: 12345 } };
  const obj5 = { ...obj4 };
  // 객체는 참조 자료형인데 내부의 객체가 있으니 그 객체는 메모리 주소값만 복사되서 들어감.
  obj5.address.zipCode = 123943;
  console.log(obj4);
  console.log(obj5);

  const obj6 = structuredClone(obj4); // 최신 깊은 복사 방법
  obj6.address.zipCode = 91875093847;
  console.log(obj6);
}
console.log("---------------------------------");
{
  // 구조 분해 할당 (비구조화 할당)
  const { name, age } = { name: "PSY", age: 20 };
  console.log(name);
  console.log(age);
}
console.log("---------------------------------");
{
  // 객체 리터럴
  // 생성자 함수 -> 파스칼 케이스 Person 단어의 첫 글자는 대문자 -> 관례임
  // userObject // 카멜 케이스 (변수 선언)
  // user_object // 스네이크 케이스
  // user-object // 케밥 케이스 (파일명)
  // UserObject // 파스칼 케이스 (생성자 함수, 클래스)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person("PSY", 20);
  const person1 = new Person("그렙", 50);
  console.log(person instanceof Person); // Person 을 가지고 생성자 함수로 선언 한게 맞는지 확인
  console.log(person);
  console.log(person1);
}

{
  // 객체의 불변성
  // 객체가 얼어버림. 그래서 코드상 오류는 없는데 값은 바뀌지 않음 단, 한번 선언해두면 녹일수가 없음
  const obj = Object.freeze({ name: "PSY", age: 20 });
  // 추가, 수정, 삭제 절대 안됨
  obj.name = "test";
  obj.gender = "male";
  delete obj.name;
  console.log(obj);

  // 추가, 삭제 만 막힘. 변경은 가능
  const obj1 = Object.seal({ name: "PSY", age: 20 });
  obj1.name = "test";
  obj.gender = "male";
  delete obj.name;
  console.log(obj1);

  // 추가만 방지
  const obj2 = Object.preventExtensions({ name: "PSY", age: 20 });
  obj2.name = "KKK";
  delete obj2.age;
  obj2.gender = "male";
  console.log(obj2);
}
