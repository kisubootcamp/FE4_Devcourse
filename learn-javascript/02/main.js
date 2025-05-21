/* 객체 */
// 키(key)와 값(value)으로 구성된 속성(property)들의 집합
{
  const obj1 = {};
  const obj2 = { name: "Hayoung", age: 25 };

  // 객체의 반복
  for (let key in obj2) {
    console.log(obj2.key); // 마침표 연산자 : key라는 속성을 찾음 -> undefined, undefined
    console.log(obj2[key]); // 대괄호 연산자 : 인덱스처럼 사용해 value값을 반환 -> Hayoung, 25
  }

  Object.keys(obj2).forEach((key) => {
    console.log(obj2[key]);
  });

  Object.entries(obj2).forEach(([key, value]) => {
    console.log(value);
  });
}

/* 객체의 속성 관리 */
{
  const obj = {};

  // 속성 추가
  obj.name = "재경";
  obj.age = 30;

  console.log(obj);

  // 속성 수정
  obj.age = 27;

  console.log(obj);

  // 속성 삭제
  delete obj.age;

  console.log(obj);
}
/* 속성값으로 객체 사용 */
{
  const obj = {
    name: "sucoding",
    address: {
      addr: "서울시 용산구",
      addr2: "강남대로",
    },
    likeFoods: ["Banana"],
  };

  console.log(obj.address.addr2);
  console.log(obj.likeFoods[0]);
}
/* 참조자료형의 복사 */
{
  // 얕은 복사
  const obj1 = { name: "Hayoung", age: 25 };
  const obj2 = obj1;

  obj2.name = "하영";
  console.log(obj1);
  console.log(obj2);

  // 얕은 복사처럼 보이는 깊은 복사 : 객체 안에 중첩 객체가 있을 경우, 중첩 객체는 깊은복사 되지 않는다
  const obj3 = { name: "Hayoung", age: 25, address: { code: 1111 } };
  const obj4 = { ...obj3 };

  obj4.name = "하영";
  obj4.address.code = 2222;
  console.log(obj3);
  console.log(obj4);

  // 깊은 복사
  const obj5 = { name: "Hayoung", age: 25, address: { code: 1111 } };
  const obj6 = structuredClone(obj5);

  obj6.name = "하영";
  obj6.address.code = 2222;
  console.log(obj5);
  console.log(obj6);
}
/* 구조 분해 할당(비구조화 할당) */
{
  const { name: uname, age } = { name: "하웽", age: 25 };
  console.log(uname);
  console.log(age);
}

/* 객체를 정의하는 방법 */
{
  // 객체 리터럴 : 기본 방법..일걸요?

  // 생성자 함수 : 함수 이름이 객체 앞에 붙는다 (라벨)
  // 객체 생성자 이름은 보통 파스칼 케이스로 작명한다.
  function Person() {
    // 매개변수 받아서 사용 가능 ex) Person(name, age) { this.name = name ... }
    this.name = "sucoding";
    this.age = 20;
  }

  const person1 = new Person(); // new : 함수 내부의 공간을 객체화 시키는 키워드이다. (new 없으면 this가 window 객체를 참조함)
  console.log(person1);
  console.log(person1 instanceof Person); // instanceof : 라벨 확인 키워드
}
/* 네이밍..모시깽이 */
// user_name 스네이크 케이스
// user-name 케밥 케이스 : JS 파일aud
// userName 카멜 케이스 : JS 변수명, 함수명
// UserName 파스칼 케이스 : JS 생성자명, 클래스명

/* this */
// this는 나를 호출한 객체이다.
{
  console.log(this); // 전역상태의 this는 윈도우 객체를 출력하도록 설정돼있다.

  function printThis() {
    console.log(this); // 엥 왜 printThis가 아니라 윈도우 객체가 나오죠?
  }
  printThis(); // = window.printThis(); 를 호출하는 것과 똑같기 때문!

  const obj = {
    name: "Hayoung",
    run: function () {
      console.log(this); // obj 객체가 출력된다 : { name: "Hayoung", run: f}
      console.log(this.name); // obj.name의 값이 출력된다
    },
  };

  obj.run();

  const obj2 = {
    name: "Hayoung",
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this); // smallObject 객체가 출력된다
        console.log(this.name); // 프로그래머스
        console.log(obj2.name); // Hayoung
      },
    },
  };
  obj2.smallObject.run();

  /* 단축 속성명 (숏컷 프로퍼티) */
  function run() {
    console.log(this);
  }

  const obj3 = {
    name: "Hayoung",
    run, // 원래는 run: run()으로 적성해야 하는데, 이름이 같을 경우 이렇게 생략 가능하다
  };

  obj3.run();

  /* 단축 함수 */
  const obj4 = {
    name: "Hayoung",
    run() {
      console.log(this);
    }, // 원래는 run: function () {...} 으로 작성해야 하는데, 이렇게 생략 가능하다.
  };

  /* 바인딩 */
  // 객체 뒤에 .bind()를 붙이면 this가 참조하는 객체를 () 안으로 설정할 수 있다.
  // 단, 해당 객체의 상위 객체를 참조하게 만들 수는 없다.
  const obj5 = {
    name: "Hayoung",
    smallObject: {
      name: "프로그래머스",
      run: function () {
        console.log(this);
      }.bind({ name: "하영" }),
    },
  };
  obj5.smallObject.run();
}
/* 객체의 불변성 */
{
  // freeze : 객체 속성의 추가, 수정, 삭제가 안된다.
  const obj = Object.freeze({ name: "Elsa", age: 21 });

  // seal : 객체 속성의 수정만 가능. 추가, 삭제는 불가능하다.
  const obj2 = Object.seal({ name: "Elsa", age: 21 });

  // preventExtensions : 속성의 추가만 막는다.
  const obj3 = Object.preventExtensions({ name: "Elsa", age: 21 });
}
