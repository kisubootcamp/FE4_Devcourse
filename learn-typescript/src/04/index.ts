/* 타입 별칭, 인터페이스 */
// 타입을 재사용할 수 있기 때문에 가독성, 유지보수성 증가

// 리터럴 타입도 타입별칭으로 가능하다
type status = "online" | "offline";
let myStatus: status = "online";

// 5. 인터섹션
type Nameable = {
  name: string;
};

type Ageable = {
  age: number;
};
// 작성 못함..

// 6. 키 선택 타입 별칭
type Person = {
  name: string;
  age: number;
  gender: string;
};

type PersonOfKeys = keyof Person; // "name" | "age" | "gender" : 키값이 리터럴로 반환된다
const key: PersonOfKeys = "gender";

// 7. 객체 선택 타입 별칭
const user = {
  name: "sucoding",
  age: 20,
};

type User = typeof user;

const user2: User = {
  name: "a",
  age: 30,
};

console.log(user);
// 런타임 : JS, HTML : 그때그때 필요할때마다 코드를 위에서 아래로 실행하는 것
// 컴파일 : 내가 실행할 코드 전체를 한 번 읽는 것

/* 강사님 코드 */
{
  // 1.
  let num: number | string = 10;
  let str: string = "A";
  let bool: boolean = true;

  const sum = (a: number, b: number): number => a + b;
  sum(10, 20);
}

{
  // 2. 타입 별칭
  // 2.1. 가독성이 좋아지고.
  // 2.2. 유지보수성이 증가함. -> 타입을 재사용할 수 있기 때문
  let userId: string | number | null = "hulk";
  let productId: number | number | null = 1;

  type ID = string | number | null;
  let userId2: ID = "hulk";
  let productId2: ID = 1;

  // 리터럴 타입도 타입 별칭으로 가능하다
  type Status = "error" | "success";
  const status: Status = "success";
}

{
  type User = {
    name: string;
    age: number;
  };

  const user1: User = {
    name: "alice",
    age: 20,
  };

  const user2: User = {
    name: "alice",
    age: 20,
  };

  const user3: User = {
    name: "alice",
    age: 20,
  };
}

{
  // 3. 함수
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}

{
  // 4. 튜플
  type Point = [number, number];
  const point: Point = [10, 15];
}

{
  // 5. 인터섹션
  type Nameable = {
    name: string;
  };

  type Ageable = {
    age: number;
  };

  type Person = Nameable & Ageable;
  type PersonOther = {
    name: string;
  } & {
    age: number;
  };
}

{
  // 6. 키 선택 타입 별칭
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";
}

{
  // 7. 객체 선택 타입 별칭
  type User = typeof user;

  const user = {
    name: "sucoding",
    age: 20,
  };

  const user2: User = {
    name: "a",
    age: 30,
  };
}

{
  // 8.
  // 타입추론
  type Category = {
    name: string;
    subCategory: (
      | {
          name: string;
          subCategory?: undefined;
        }
      | {
          name: string;
          subCategory: {
            name: string;
          }[];
        }
    )[];
  };

  // 직접 작성
  type Category2 = {
    name: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  // 재귀타입별칭
  type Category3 = {
    name: string;
    subCategory: Category3[];
  };

  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Gaming Laptops",
          },
        ],
      },
    ],
  };
}

/* 인터페이스 */
// only 객체 타입만 지정할 수 있다.
// 선언 병합 : 똑같은 식별자가 있다면 자동으로 합쳐준다.!!
// extends? : 상속
{
  interface User {
    name: string;
    age: number;
  }
  interface User {
    gender: "male" | "female";
  }

  const user1: User = {
    name: "alice",
    age: 20,
    gender: "female",
  };

  console.log(user1);
}
// 튜플, 기본 타입, 함수, API 응답 값 -> 타입 별칭
// 정해진 건 아니지만 대부분 그렇게 쓴다

/* 범용적인 타입 지정 방법 : 인덱스 시그니처 */
// 객체의 속성과 값을 자유롭게 추가하거나 삭제하기는 편하지만, 사용할때는 정확한 타입지정이 되어있지 않아 타입가드를 해줘야한다.
// 객체의 속성이 확실하지 않은 것만 지정해서 믹스해 사용한다.
{
  const obj: {
    [key: string]: string | number;
  } = {
    name: "Hayoung",
    age: 25,
  };
}

{
  /* 헝가리안 표기법 */
  // 마이크로 소프트의 헝가리 출신 개발자 -> 식별자를 구분할수있는 식별자를 붙여주자!
  // number -> nNumber // 정수구나
  // num -> fNumber // 실수구나
  // name -> strName // 문자열이구나
  // 한 때 유행했었다. 하지만 현재는 사용하지 않도록 권장하는 추세이다.
  // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주자
  // type User = {}; // -> TUser
  // interface User {} // -> IUser
  // const user: User = {}; // 먼저 작성된 것을 따라간다!
}

{
  /* 구별된 유니온 타입 */
  // 두개의 타입을 구별할 수 있는 중복되지 않는 속성으로 타입가드를 작성하는 것
  interface User {
    name: string;
  }
  interface Car {
    name: string;
    speed: number;
  }

  const user: User = { name: "HY" };
  const car: Car = { name: "BMW", speed: 100 };

  function printValue(obj: User | Car) {
    if ("speed" in obj) console.log(obj.speed);
    else console.log(obj.name);
  }

  printValue(user);
  printValue(car);
}
{
  /* 구조적 타이핑 */
  // 객체의 타입을 비교할때, 정의가 되어져있는 타입 이름을 보고 비교하는 게 아니라, 구조를 보고 비교한다.
  type Car = {
    name: string;
    speed: number;
  };
  interface Vehicle {
    name: string;
    speed: number;
  }

  let car: Car = { name: "BMW", speed: 100 };
  let vehicle: Vehicle = { name: "Honda", speed: 200 };

  // 타입이 다른데, 상호 할당이 가능하다
  vehicle = car;

  // 심지어 이것도 됨
  function printValue(obj: Car) {
    console.log(obj.name, obj.speed);
  }

  printValue(vehicle);

  // 많은 속성 -> 적은 속성으로 할당 가능하다. 이런 경우에는 값이 들어가는 있지만 접근이 불가능하다.
  {
    type Car = {
      name: string;
      speed: number;
    };
    interface Vehicle {
      name: string;
    }

    let car: Car = { name: "BMW", speed: 100 };
    let vehicle: Vehicle = { name: "Honda" };

    // car = vehicle; 이건 안됨. 근데 Car.speed?이면 아마도 가능
    vehicle = car; // 이건 됨. 이 때 vehicle = { name: "BMW", speed: 100 };
    // console.log(vehicle.speed); 하지만 이건 안됨. Vehicle에 speed 속성이 없기 때문
  }
}

/* 이넘(enum) : 열거형, 관련된 타입을 묶어 놓는 것 */
// interface처럼 선언병합이 된다.
{
  enum Status {
    Pending, // = 0
  }
  enum Status {
    InProgress = "InProgress",
  }

  const current: Status = Status.InProgress;
  console.log(current);
  console.log(Status.Pending);
}

{
  // 타입가드 : 정적인 상태에서 검사하는 게 아니라, 동적인 상태에서 검사를 하게 하는 원리다
  let value: unknown = "Hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  // 타입단언 : 정적 타입일 때 정의 -> 타입검사를 수행하지 않기때문에 에러를 발생시킬 수 있다
  console.log((value as string).toUpperCase());
}
