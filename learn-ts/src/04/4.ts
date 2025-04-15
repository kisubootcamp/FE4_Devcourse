{
  // 타입 별칠 -> Type
  // 인터페이스 -> Interface
  // 1. 선언하는 문법의 차이
  // 1.1 type Type = ...
  // 1.2 interface Interface = ...
  // 2. 인터페이스는 선언 병합, extends 키워드로 상속
  // 3. 인터페이스는 객체 타입만 정의할 수 있고, 타입 별칭은 모든 타입을 정의할 수 있다.
  // 4. 타입 별칭과 인터페이스는 서로가 서로의 재료가 될 수 있음

  type Status = "Error" | "Success";

  interface ProductItem {
    id: number;
    name: string;
    price: number;
    status?: Status;
  }

  type Product = {
    name: string;
    items: ProductItem[];
  };

  const product: Product = {
    name: "TV",
    items: [
      {
        id: 1,
        name: "LG OLED",
        price: 1000000,
      },
    ],
  };
}

console.log("-------------------------------------");

{
  // enum 이넘 - 열거형, 관련된 타입을 묶어 놓는 것
  type Status = string;
  // enum 의 키값은 파스칼 케이스로 작성하는 관례가 있다.
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: StatusEnum) {
    if (status === "loading") console.log("로딩 중...");
    else if (status === "success") console.log("성공");
    else if (status === "error") console.log("실패");

    switch (status) {
      case StatusEnum.Loading:
        console.log("로딩 중...");
        break;
      case StatusEnum.Success:
        console.log("성공");
        break;
      case StatusEnum.Error:
        console.log("실패");
        break;
    }
  }

  showStatus(StatusEnum.Loading);
  showStatus(StatusEnum.Success);
  showStatus(StatusEnum.Error);

  // enum 과 const enum 의 차이
  // enum -> 번들 크기가 크기만, 디버깅이 용이함
  // const enum -> 번들 크기가 작고, 디버깅이 불편함
  const enum StatusConstEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  console.log(StatusConstEnum.Loading); // loading 치환 되어 출력

  // enum 의 컴파일 결과
  //   var StatusEnum;
  // 즉시 실행 함수로 값을 넣어줌
  // (function (StatusEnum) {
  //     StatusEnum["Loading"] = "loading";
  //     StatusEnum["Success"] = "success";
  //     StatusEnum["Error"] = "error";
  // })(StatusEnum || (StatusEnum = {}));
}

console.log("-------------------------------------");

{
  // 숫자 열거형
  // enum 의 값은 숫자가 자동으로 할당됨
  // 중간에 Down 을 500으로 바꾸면 그 밑의 값들은 501, 502, 503 이렇게 증가함
  enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }
  const direction = Direction.Up;
  console.log(direction);
}

console.log("-------------------------------------");

{
  // 숫자 열거형
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500,
  }

  // 키와 값으로 접근이 가능함
  console.log(StatusCode.OK);
  console.log(StatusCode[200]); // 리버스 매핑 -> 값으로 키값을 접근 함
  // 단, const enum 에서는 리버스 매핑이 안됨
  // 왜냐하면 컴파일 시 enum 의 흔적이 사라지기 때문
}

console.log("-------------------------------------");

{
  // 문자 열거형
  // 한번이라도 문자가 할당되면 그 뒤에 할당된 값에 무슨 값이든 넣어줘야 함.
  // 문자 + 숫자 : 혼합 열거형 -> 일반적으로 잘 사용되지 않음
  enum Status {
    Loading = "Loading",
    Success = "Success",
    Error = "Error",
  }
  const status = Status.Loading;
  console.log(status);

  // enum 도 타입으로 사용이 가능함
  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: "data",
    status: Status.Loading,
  };
}

console.log("-------------------------------------");
{
  type StatusType = "Loading" | "Success" | "Error";
  function showStatus(status: StatusType) {}
}
