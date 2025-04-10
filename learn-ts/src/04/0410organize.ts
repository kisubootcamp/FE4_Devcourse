{
  // ✅ 타입 별칭
  // 🌟 키 선택 타입 별칭 (keyof)
  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  // keyof 로 타입 추출
  type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
  const key: PersonOfKeys = "gender";
  // keyof 로 타입 Person 의 모든 키를 문자열 리터럴 유니온 타입으로 추출
  //  "name" | "age" | "gender" 이라는 타입이 되는 것
  // 주로 객체의 key 를 기반으로 동적으로 타입을 지정할 때 사용
  // keyof는 객체 타입에만 사용가능

  // 🌟 객체 선택 타입 별칭 (typeof)
  type User = typeof user; // typeof 로 타입 추출
  const user = {
    name: "sucoding",
    age: 20,
  };
  const user2: User = {
    name: "a",
    age: 30,
  };
  // typeof user 는 변수 user의 타입을 그대로 추출해서 User 타입에 저장
  // User 는 {name:string, age:number}
  // typeof 는 값 -> 타입으로 변환할 때 사용되고, 실제 값 선언 이후에만 사용 가능
  // 타입 중복을 줄이고 재사용성을 높이기 위해 사용된다.

  // 🌟 재귀 타입 별칭
  // 타입 정의 안에서 자기 자신을 참조하는 타입
  // 트리 구조, 계층 구조 표현에 적합함
  // ? 를 사용해 선택 속성으로 종료 조건을 설정해야 안전함 (무한 타입 확장 막기)
  // 재귀 쓰지 않는 ver
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
  // 재귀 타입 별칭 예시
  // 카테고리 안에 또 다른 카테고리를 포함할 수 있다는 것을 의미
  type Category4 = {
    name: string;
    subCategory?: Category4[];
  };
  const category: Category4 = {
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
  // 재귀 타입 별칭이 필요한 이유
  // 카테고리, 폴더, 메뉴 처럼 얼마든지 깊이가 깊어질 수 있고, 미리 정해놓기 어려움
  // -> 수작업으로 정의하면 확장성과 유지보수성이 떨어짐 -> 반복을 피하고 유연한 구조를 위해 씀

  // ⚠️ 재귀 타입 주의할 점
  // 재귀 타입은 타입 추론이나 자동 완성에서 깊이가 깊어질수록 성능이 떨어질 수 있다.

  // ✅ 인터페이스
  // 객체 타입을 지정할때 사용
  // ❗ 인터페이스와 타입의 차이점
  // 둘 다 객체 타입을 정의할 수 있지만,
  // 인터페이스는 주로 객체, 클래스, 함수 구조 설계에 사용됨
  // 타입 은 더 범용적인 타입 정의가 가능함(유니온, 튜플, 리터럴 등)
  interface User1 {
    name: string;
    age: number;
  }

  // 인터페이스로 함수 타입 정의
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }
  // 타입으로 함수 타입 정의
  type SumFunc = (n1: number, n2: number) => number;
  // 인터페이스와 타입 둘 다 함수 타입 정의 가능하며, 기능상 거의 동일함

  const sum: SumFuncInterface = (n1, n2) => n1 + n2;

  // 🌟 선언 병합 -> type 은 이름이 중복되면 오류
  // 인터페이스는 동일한 이름으로 여러번 선언하면 자동으로 병합됨
  // 여러 파일에서 같은 인터페이스를 확장하고 싶을 때 유용
  // interface person
  interface Person2 {
    name: string;
    age: number;
  }
  // interface person
  interface Person2 {
    email: string;
    phone?: string;
  }
  // 인터페이스 선언 병합 예제
  const john: Person2 = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };
  console.log(john);

  // 🌟 상속
  // 인터페이스는 다른 인터페이스를 extends 해서 재사용 + 확장 가능
  // 클래스 상속 개념처럼 사용 가능 (= 가독성, 유지보수 좋음)
  // 기본 인터페이스 정의
  interface Animal {
    name: string;
    age: number;
    makeSound(): void;
  }
  // Animal 인터페이스를 상속받는 Dog 인터페이스 정의
  interface Dog extends Animal {
    breed: string; // 추가적인 프로퍼티
    bark(): void; // 추가적인 메서드
  }
  const dog1: Dog = {
    name: "멍멍이",
    age: 3,
    breed: "진돗개",
    makeSound() {
      console.log("멍멍");
    },
    bark() {
      console.log("왈왈");
    },
  };

  // 🌟 인덱스 시그니처 (= 범용적인 객체 타입 지정 방법)
  // 프로퍼티 이름을 정해놓지 않고, 모든 키를 특정 타입의 값으로 지정하고 싶을 때 사용
  // ex) 유저의 정보가 동적으로 정해질 때
  interface IPerson {
    [key: string]: string | number;
  }
  const john1: IPerson = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };
  console.log(john1);

  // 명시한 속성의 타입도 인덱스 시그니처의 값 타입과 호환되어야 한다!
  interface Example {
    [key: string]: string;
    name: string;
    // age: number; // 오류 — number는 허용되지 않음
  }

  // ✅ 타입 가드
  // 타입 가드 : 값의 타입을 런타임에서 검사해서, 특정 타입으로 좁혀주는 코드 패턴
  // 유니온 타입 등에서 어떤 타입인지 조건문으로 판별한 후, 해당 타입으로 간주되도록 만드는 방식
  // 대표적인 타입 가드 방식 5가지
  // 1) typeof(기본형 타입 판별)
  // 2) instanceof(클래스 기반 판별)
  // 3) key in 객체(속성 존재 판별)
  // 4) 리터럴 값 판별(태그 유니온) - 공통된 타입 등의 리터럴 속성을 기준으로 구분
  // 5) 사용자 정의 타입 가드(is 키워드)
  // 타입 가드 장점
  // 런타임 안정성 증가 : 실제 있는 메서드나 프로퍼티만 사용
  // IDE 자동완성 향상 : 타입 좁혀진 상태에 맞는 자동완성 제공
  // 유니온 타입 분기처리 용이

  // 타입 가드 주의할 점
  // 중복되지 않는 속성으로 타입 가드를 작성해야한다
  // => 구별된 유니온 타입 (인터페이스, 타입 별칭 다 똑같이 적용)
  // 객체 구조가 비슷하면 모호해짐 (구조적 타이핑 때문에 잘못된 타입으로 좁혀질 수 있음)
  // 사용자 정의 타입 가드는 명시적으로 작성 (obj is Type 형태로 정확히 리턴해야함)
  type User2 = {
    name: string;
  };

  type Car = {
    name: string;
    speed: number;
  };

  const user3: User2 = { name: "sucoding" };
  const car: Car = { name: "bmw", speed: 100 };

  // 3) key in 객체(속성 존재 판별)
  function printValue(obj: User2 | Car) {
    if ("speed" in obj) console.log(obj.speed);
    else console.log(`${obj.name}`);
  }
  printValue(user3);
  printValue(car);

  // 4) 리터럴 값 판별(태그 유니온) - 공통된 타입 등의 리터럴 속성을 기준으로 구분
  type Shape =
    | { type: "circle"; radius: number }
    | { type: "square"; side: number };

  function getArea(shape: Shape) {
    if (shape.type === "circle") {
      return Math.PI * shape.radius ** 2;
    } else {
      return shape.side ** 2;
    }
  }

  // 5) 사용자 정의 타입 가드(is 키워드)
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };

  function isFish(animal: Fish | Bird): animal is Fish {
    return "swim" in animal;
  }

  function move(animal: Fish | Bird) {
    if (isFish(animal)) {
      animal.swim(); // Fish로 확정됨
    } else {
      animal.fly(); // Bird로 확정됨
    }
  }

  // 🤔 구조적 타이핑
  // 타입스크립트는 객체타입 비교할 때 정의된 타입 이름을 보는게 아니라
  // 안의 구조를 보고 비교한다
  // = 모양새가 같다면 상호 호환 허용된다.
  type Car2 = {
    name: string;
    speed: number;
  };

  interface Vehicle {
    name: string;
  }

  let car2: Car2 = { name: "bmw", speed: 100 };
  let vehicle: Vehicle = { name: "honda" };

  vehicle = car2; // { name, speed }
  //   console.log(vehicle.speed);

  // ✅ enum
  // 관련된 타입을 그룹으로 묶어주는 열거형 타입
  // enum 예시
  // 문자열 리터럴로 쓰는 것 보다 enum 으로 선언해서 사용하면 관리가 편함
  // 문자열 enum
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: Status) {
    switch (status) {
      case Status.Loading:
        console.log("로딩 중...");
        break;
      case Status.Success:
        console.log("성공");
        break;
      case Status.Error:
        console.log("실패!");
        break;
    }
  }
  type StatusType = "loading" | "success" | "error";
  function showStatusType(status: StatusType) {}
  showStatusType("success");

  // 숫자형 enum
  // 값을 지정하지 않으면 0부터 숫자가 자동 할당
  enum Direction {
    Up, // 0
    Down = 500, // 500
    Left, // 501
    Right, //502
  }
  Direction.Up === 0; // true

  // enum 과 const enum 의 차이에 대해 정리
  // 💡 번들 : 여러 개의 파일을 하나의 파일로 묶는 과정
  // -> 이때 만들어진 결과물이 번들 파일
  // enum : 번들 크기가 크고, 디버깅 용이 (값이 자주 반복되고 디버깅이 필요한 경우)
  // const enum : 번들 크기가 작고, 디버깅 불편 (가볍고 최적화된 코드가 필요할 경우)
  // const enum
  // - 런타임에 존재하지 않고, 컴파일할 때 상수로 대체
  // - 주로 성능 최적화가 필요한 경우 사용
  const enum Status1 {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  // 타입 단언
  // - 값의 타입을 추론하거나 좁히지 못할 때, 개발자가 "이 값은 확실히 이 타입이야!" 알려주는 방식
  // - any, unknown 등의 모호한 타입을 명확히 할 때 사용
  // 조건문으로도 좁힐 수 있지만, 이미 확신이 있을 때는 타입단언이 더 간결

  // 타입 단언 사용 방법
  function printValue1(value: number | string) {
    // if (typeof value === "number") console.log(value.toFixed(0));

    // 1) as 구문
    console.log((value as number).toFixed(0));

    // 2) < > 구문 : jsx문법을 사용하는 경우에는 <> 가 jsx 태그로 해석될 수 있어 비추
    // <단언할타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  // ⚠️ 타입 단언 주의
  // 타입 단언은 타입 체커를 무시하는 것이기 때문에,
  // 잘못 단언해도 컴파일 오류가 안 나고 런타임 에러 발생 가능!
  printValue1("aaaa");

  // 널이 아님을 보장하는 연산자 !
  // 값이 null 또는 undefined 가 아님을 개발자가 확신할때,
  // ! 를 붙여 타입스크립트에게 알려주는 연산자
  function printValue3(value: number | null) {
    // if (typeof value === "number")
    console.log(value!.toFixed(2));
  }
  printValue3(null);
}
