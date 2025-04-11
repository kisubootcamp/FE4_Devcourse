{
  // 이넘(enum) - 열거험, 관련된 있는 타입을 묶어놓음   NOTE
  // 이넘의 key 값을 적을 때는 파스칼 케이스로 작성하는 것이 관례
  // enum vs cosnt enum
  // enum 은 컴파일 과정에서 즉시 실행함수로 남아있음,
  //-> 번들크기가 크지만, 디버깅 용이
  // const enum 은 컴파일 과정에서 안보이게 됨, 이넘이 사용된 코드만 변환,
  //-> 번들 크기가 작지만, 디버깅 불편함
  // 오타 같은 개발잘의 실수 방지
  //의미적으로 가독성있게 보일 수 있음 (ex. showStatus(HttpsRequest.Success): https 요청에 성공했다)
  type Status = string;
  enum StatusEnum { // 사용자에게 입력받아야 할 값들을 열거
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  function showStatus(status: StatusEnum) {
    if (status === "loading") {
      console.log("로딩중...");
    } else if (status === "success") {
      console.log("성공");
    } else if (status === "error") {
      console.log("실패");
    }
  }

  function showStatus2(status: StatusEnum) {
    switch (status) {
      case StatusEnum.Loading:
        console.log("로딩중..");
        break;
      case StatusEnum.Success:
        console.log("성공");
        break;
      case StatusEnum.Error:
        console.log("에러");
        break;
    }
  }
  showStatus(StatusEnum.Success);
  showStatus2(StatusEnum.Loading);
}
{
  // enum 숫자값이 할당됨
  // 숫자 열거형 enum
  enum Direction {
    Up, // 0
    Down = 500, // 500
    Left = 600, // 501
    Right = 700, //502
  }

  console.log(Direction.Up);
  console.log(Direction.Down);
  console.log(Direction.Left);
  console.log(Direction.Right);
}

{
  //숫자 열거혐
  //숫자는 값이 없는 경우 이전 값에서  자동으로 +1
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  console.log(StatusCode.OK); // 200
  console.log(StatusCode[200]); // OK -> 값으로 열거형의 키를 가져올 수 있음 (리버스 매핑) NOTE
  // const enum 에서는 리버스 매핑 불가능
}
{
  //문자열거형은 값이 없을 때 이전 값에서 받아와서 값을 주지 못함
  // 혼합열거형 x
  enum Status {
    Loading = "loading",
    Error = "error",
    Success = "success",
  }

  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: "success",
    status: Status.Success,
  };
}
