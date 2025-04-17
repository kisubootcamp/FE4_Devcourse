// this -> this는 나를 호출한 객체
// 스코프: 실행 컨텍스트 내부의 영역

// 단축 함수
const user = {
  run: function () {},
  run2() {},
};
function run() {
  console.log(this);
}

// 단축 속성명
const obj = {
  name: 'sucoding',
  smallObject: {
    name: '프로그래머스',
    run: function () {
      console.log(this); //수코딩 잘생김
    }.bind({ name: '수코딩 잘생김' }),
  },
};

obj.smallObject.run();

// 객체
// -> 키(key)와 값(value)으로 구성된 속성(property)들의 집합
const obj2 = { name: 'sucoding', age: 20 };

// 객체 순회
for (let key in obj2) {
  console.log(obj2[key]); // 대괄호 연산자
}
Object.keys(obj2).forEach((key) => {
  console.log(obj2[key]);
});
Object.entries(obj2).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});

console.log(Object.keys(obj2));

const obj3 = {};

// 객체 속성 동적으로 추가
obj3.name = 'sucoding';
obj3['age'] = 20;

console.log(obj3);

// 삭제
delete obj3.name;
console.log(obj3);

const obj4 = {
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

console.log(obj4.address.zipCode);
console.log(obj4['address']['zipCode']);
console.log(obj4.likeFoods[0]);

const obj5 = { name: 'sucoding', age: 20, address: { zipCode: 1111 } };
const obj6 = structuredClone(obj5); // 주소값, 깊은 복사사

obj6.name = '그렙';
obj6.address.zipCode = 2222;
console.log(obj5, obj6);

{
  // 구조분해 할당
  const { name, age } = { name: 'sucoding', age: 20 };
  console.log(name);
  console.log(age);
}

{
  // 객체 리터럴
  // 생성자 함수 -> 파스칼케이스
  //es5
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
      console.log(`${this.name}, ${this.age}`);
    };
  }
  // const person1 = Person() window 객체라 undefined
  const person1 = new Person('sucoding', 20); // 함수 내부가 객체로 캡슐화됨
  person1.print();
  const person2 = new Person('그렙', 50);
  const person = {
    name: 'sucoding',
    age: 20,
  };
  console.log(person1 instanceof Person); //true
  console.log(person2 instanceof Person); //true
  console.log(person1);
  console.log(person2);
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
  const person1 = new Person('존', 30);
  console.log(person1);
}

{
  // 객체의 불변성
  const obj = Object.freeze({ name: 'sucoding', age: 20 });

  // 객체의 추가 삭제 x 변경은 가능
  const obj1 = Object.seal({ name: 'sucoding', age: 20 });
  obj1.name = 'john';

  // 객체 추가만 막음
  const obj3 = Object.preventExtensions({ name: 'sucoding', age: 20 });
  delete obj3.age;
  obj3.gender = 'male';
}
