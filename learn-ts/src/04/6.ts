{
  // 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것
  type Status = string;
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: StatusEnum) {
    if (status === "loading") {
      console.log("로딩 중 ...");
    } else if (status === "success") {
      console.log("성공");
    } else if (status === "error") {
      console.log("실패");
    }
  }
  // case문
  function showStatus2(status: StatusEnum) {
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

  showStatus(StatusEnum.Success);

  type StatusType = "loading" | "success" | "error";
  function showStatusType(status: StatusType) {}
  showStatusType("success");
}

// enum -> 번들 크기가 크지만, 디버깅이 용이함
// const enum -> 번들 크기가 작지만, 디버깅이 불편함
// 내가 편하기 위해서 사용? 정도
// ex. status 대신 ApiStatus 직관적으로 눈에 보기 좋게

{
  // enum 숫자 값이 할당됨
  // 숫자 열거형 enum -> 그렇게 많이 사용되지 않음
  enum Direction {
    Up, // 0
    Down = 500, // 500
    Left, //501
    Right, //502
  }

  console.log(Direction.Up);
  console.log(Direction.Down);
  console.log(Direction.Left);
  console.log(Direction.Right);
}

{
  // 숫자 열거형
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  console.log(StatusCode.OK);
  console.log(StatusCode[200]); // 리버스 매핑 -> const enum은 불가
}

{
  // 문자 열거형
  // 혼합 열거형 -> 일반적으로 사용되지 않음
  enum Status {
    Loading = "lodaing",
    Error = 0,
    Success = "success",
  }

  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: "success",
    status: Status.Error,
  };
}
