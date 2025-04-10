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
  // 7.
  type Category = {
    name: string;
    //타입 재귀 사용
    subCategory?: Category[];
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

{
  //인터페이스
  //*객체 타입*만을 지정할 때 사용
  //타입 별칭은 객체 타입 외에도 사용 가능하다
  interface User {
    name: string;
    age: number;
  }
  //인터페이스는 식별자가 같으면 타입을 합쳐준다.
  interface User {
    gender: string;
  }
  const user1: User = {
    name: "이준호",
    age: 28,
    gender: "male",
  };
  //인터페이스의 함수
  interface sumfc {
    //함수 정의
    (n1: number, n2: number): number;
  }
  const sum: sumfc = (n1, n2) => {
    return n1 + n2;
  };
  sum(1, 2);
  //인터페이스 상속

  interface Dog {
    name: string;
    bark(): void;
  }
  const dog: Dog = {
    name: "콩",
    bark() {
      console.log("멍멍");
    },
  };
  interface Cat extends Dog {
    name: string;
  }
}

{
  //인덱스 시그니처
  //범용적인 타입 지정 방법
  //객체 타입에 사용
  //실무에선 확실하지 않은 속성 때문에 사용
  type Obj = {
    name: string; //확실하게 타입을 알 수 있는 속성
    age: number; //확실하게 타입을 알 수 있는 속성
    [key: string]: string | number;
  };
}

// 객체여서 사용 가능한 방법
// 옵셔널 프로퍼티
// readonly
// 인덱스 시그니처

{
  //인터페이스에 타입 가드 사용해보기
  interface User {
    name: string;
  }
  interface Car {
    speed: number;
  }
  const user: User = { name: "이준호" };
  const car: Car = { speed: 100 };

  function printValue(obj: User | Car): void {
    if ("name" in obj) console.log(obj.name);
    else console.log(obj.speed);
  }
  printValue(user);
  printValue(car);
}

{
  //enum - 열거형, 관련된 타입을 묶어 놓은 것
  //key로 value에 다가가는게 객체와 비슷하네..?
  //파스칼 케이스를 사용해야한다
  //interface와 type의 재료로 사용 될 수 있다

  //문자 열거형
  //문자 열거형은 빈 값이 있을 수 없다. 숫자 열거형처럼 자동으로 숫자를 넣어주지 않기 때문이다.
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: "js",
    status: Status.Error,
  };

  console.log(Status.Success);
  console.log(Status["Success"]); //리버스매핑

  function showStatus(status: Status) {
    if (status === "loading") console.log("로딩 중");
    else if (status === "success") console.log("성공");
    else if (status === "error") console.log("실패");
  }

  //enum 사용
  showStatus(Status.Success);

  //enum에 value 값을 지정하지 않으면 1씩 증가하는 숫자로 열거 된다.
  //숫자 열거형으로 자주 사용 되진 않는다.
  enum Direction {
    Up, //0
    Down, //1
    Left = 527,
    Right, //528
  }
}

{
  let value: number | string = 10.12;
  console.log(value.toFixed(0));
}
{
  function printValue(value: number | string) {
    // 타입을 좁혀주는 조건문 또는 문법 -> 타입가드
    // if (typeof value === "number") console.log(value.toFixed(0));

    // 타입 단언 -> 타입스크립트 컴파일러에게 타입을 명확하게 알려주는 행위
    // 타입 단언 -> as [단언할 타입]
    console.log((value as number).toFixed(0));
    // <단언할타입> -> 리액트에서 사용할 수 없다. JSX 문법과 충돌
    console.log((<number>value).toFixed(0));
  }
  printValue("aaaa");
}
{
  type User = {
    name: string;
  };
  type Car = {
    speed: number;
  };

  const user: User = {
    name: "sucoding",
  };

  const car: Car = {
    speed: 100,
  };

  function printValue(obj: User | Car) {
    console.log((obj as Car).speed);
  }

  printValue(user);
}
{
  // 널 아님 보장 연산자 (!)
  function printValue(value: number | null) {
    // if (typeof value === "number")
    console.log(value!.toFixed(2));
  }
  printValue(null);
}

{
  const element = document.querySelector("button") as HTMLButtonElement;
  element.style.color = "red";
}
