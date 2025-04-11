//객체

// 키:값으로 구성된 속성들의 집합.
const obj1 = {};
const obj2 = {
  name: 'sucoding',
  age: 20,
};

// 객체를 반복하려면?
for (let key in obj2) {
  // console.log(obj2.key) 는 아니다!! (이걸 마침표 연산자 라고 한다)
  console.log(obj2[key]); // 이걸 대괄호 연산자 라고 한다
}

// Object.keys  : 키 값을 출력해주는 메서드
console.log(Object.keys(obj2));

Object.keys(obj2).forEach((key) => {
  console.log(obj2[key]);
});

// 또는
Object.entries(obj2).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

{
  const obj = {};

  //동적으로 객체 속성 추가하기
  obj.name = 'sucoding';
  obj.age = 20;

  // 동적 삭제
  delete obj.name;

  console.log(obj);
}

{
  // 객체는 또 다른 객체를 포함할 수 있다.
  // obj 객체에 run메서드(함수) 를 실행해주세요
  const obj = {
    name: 'sucoding',
    address: {
      zipCode: 13131,
      addr: '서울시 용산구',
      addr2: '강남대로',
    },
    likeFoods: ['banana'],
    run: function () {
      console.log('run~!');
    },
  };
  console.log(obj.address.zipCode);
  console.log(obj.likeFoods[0]);
}

// 객체는 참조 자료형이다!
{
  const obj1 = { name: 'sucoding', age: 20 };
  const obj2 = obj1;
  // 실제로 데이터가 들어가는게 아니라, 주소값이 들어간다.

  obj2.name = '그랩';
  console.log(obj1);
  console.log(obj2);
}

{
  const obj1 = { name: 'sucoding', age: 20, address: { zipcode: 1111 } };
  const obj2 = { ...obj1 }; //이렇게 하면, obj2의 키값을 바꿔도 1에는 영향을 안준다.

  obj2.name = '그랩';
  obj2.address.zipcode = 2222;
  // 근데 이건 obj1,2 둘 다 바뀌네??
  // 그럼 {...obj1} 은 언제 써야하나

  //깊은복사를 하는 방법
  // 요즘은 이 방법을 쓰면 된다
  const obj2 = structuredClone(obj1);

  console.log(obj1);
  console.log(obj2);
}

{
  //객체 구조 분해 할당 (비구조화 할당)
  const obj = { name: 'sucoding', age: 20 };
  console.log(obj.name);
  console.log(obj.age);

  const { name: uname, age } = { name: 'sucoding', age: 20 };
  console.log(name);
  console.log(age);
  // name:uname 으로 변경 가능
  console.log(uname);
}

{
  //객체 리터럴
  const person = {
    name: 'sucoding',
    age: 20,
  };

  //함수로 객체 정의해주기 (이름은 대문자로 시작)
  function Person(name, age) {
    this.name = 'sucoding';
    this.age = 20;
    this.print = function () {
      console.log(this);
    };
  }

  const person1 = new Person('sucoding', 20);
  person1.print();

  const person1 = new Person(); // 자신의 함수 영역을 객체로 만들어주는 'new'
  console.log(person1 instanceof Person);
  // person1에 달린 꼬리표가 Person 인지 확인하는 방법

  const person2 = new Person('그랩', 50);

  console.log(person1);
  console.log(person2);
}

{
  //객체의 불변성 : 한번 정의한 객체를 바꾸지 못하게 하는 방법
  // 추가 삭제 변경 다 안된다.
  const obj = Object.freeze({ name: 'sucoding', age: 20 });
  obj.name = 'john';
  console.log(obj);

  // 추가 삭제를 막고, 변경은 된다.
  const obj2 = Object.seal({ name: 'sucoding', age: 20 });
  obj2.name = '김기수';
  console.log(obj2);

  // 추가만 막음
  const obj3 = Object.preventExtensions({ name: 'sucoding', age: 20 });
  obj3.name = '김기수';
  delete obj3.age;
  console.log(obj3);
}
