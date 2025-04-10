{
  // 타입별칭 -> type
  // 인터페이스 -> interface
  // 1. 선언하는 문법의 차이
  // 1.1 type Type = ...
  // 1.2 interface Type {...}
  // 2. 인터페이스는 선언 병합, extends를 통한 상속 가능
  // 3. 인터페이스는 객체 타입만 정의할 수 있고, 타입 별칭은 모든 타입을 정의할 수 있다.
  // 4. 타입 별칭과 인터페이스는 서로가 서로의 재료가 될 수 있음

  // 사용하려는 타입을 지정하는 여러 방법중 하나이다.
  type Status = "Error" | "Success";

  interface Product {
    id: number;
    name: string;
    price: number;
    stasus?: Status;
  }

  type ProductT = {
    name: string;
    items: Product[];
  };

  const product1: ProductT = {
    name: "Monitor",
    items: [
      {
        id: 1,
        name: "Viewfinity",
        price: 300000,
      },
    ],
  };
}

{
  //enum: 열거형 - 관련된 타입을 묶어 놓는 것
  type Status = string;
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  } // enum으로 타입을 나열
  function showStatus(status: StatusEnum) {
    if (status === "loading") {
      console.log("로딩 중...");
    } else if (status === "success") {
      console.log("성공");
    } else if (status === "error") {
      console.log("실패!");
    }
  }
  // showStatus("success"); // enum으로 선언한 요소를 호출 불가
  // 함수에서 enum요소를 호출할 때 오타가 있으면 알려줌
  // showStatus("sucs"); // 버그
  // enum은 즉시 실행 함수로 컴파일
  // enum은 전해진 값들이 컴파일중 값이 남아있다 JS로 치환하고 사용
  // const enum: enum이 사용된 내부만 치환하여 사용하고 enum의 값은 사라짐

  // enum: 번들 크기가 크지만 디버깅이 용이함
  // const enum: 번들 크기가 작지만, 디버깅이 불리함
  showStatus(StatusEnum.Success);

  function showStatus2(stasus: StatusEnum) {
    switch (stasus) {
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
  showStatus2(StatusEnum.Success);

  // showStatus(DomControl.Success);

  type StatusType = "loading" | "success" | "error";
  function showStatusType(status: StatusType) {}
  showStatusType("success");
  // enum의 사용은 조직에 따라 달라질 수 있다.
}

{
  // enum은 기본적으로 숫자값이 할당됨
  // 숫자 열거형 enum
  enum Direction {
    Up, // 0
    Down = 500, // 1 -> 500
    Left, // 2 -> 501
    Right, // 3 -> 502
  } // 값을 다 다르게 지정하고 싶으면 각각 지정을 해줘야 한다.

  console.log("Up");
  console.log(Direction.Up); // 둘 다 같은 의미이지만 enum을 사용하면 더 명확하게 사용할 수 있다.
  console.log(Direction.Down);
  console.log(Direction.Left);
  console.log(Direction.Right);
}
{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }
  console.log(StatusCode.OK);
  console.log(StatusCode[200]); // 리버스 매핑 const enum은 컴파일 된 후 enum의 흔적이 없기 때문에 역으로 추적이 불가능하다.
}

{
  // 문자 열거형 - 실제로는 더 많이 사용되는 enum의 형태이다.
  // 문자가 할당되면 반드시 값을 넣어줘야 한다.
  enum Status {
    Waiting,
    Loading = "loading",
    Error = "error",
    Success = "success",
  }
  // 혼합 열거형 - 선언은 가능하지만 보통 사용하지 않음.
  enum Status2 {
    Waiting,
    Loading = "loading",
    Error = 0,
    Success = "success",
  }
  console.log(Status2.Waiting);

  interface API {
    data: string;
    status: Status; // enum이 타입 별칭의 재료로 쓰일 수 있다.
  }

  const api: API = {
    data: "success",
    status: Status.Error,
  };
}
