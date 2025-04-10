{
  // 이넘(enum)- 열거형, 관련된 타입을 묶어 놓는 것(첫글자 대문자)
  type Status = string;
  enum StatusEnum {
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
      console.log("실패!");
    }
  }
  //   showStatus("sucess"); //bug (스펠링 오류)
  showStatus(StatusEnum.Success); //스펠링 오류 찾아내기 쉬움

  function showStatus1(status: StatusEnum) {
    switch (status) {
      case StatusEnum.Loading:
        console.log("로딩중...");
        break;
      case StatusEnum.Success:
        console.log("성공");
        break;
      case StatusEnum.Error:
        console.log("실패!");
        break;
    }
  }
  showStatus1(StatusEnum.Success);

  type StatusType = "loading" | "success" | "error";
  function showStatusType(status: StatusType) {}
  showStatusType("success"); //이렇게 해도 오타 에러 보여줌
  // 그렇지만 단순한 문자열이므로 의미를 많이 담고있지는 못함
  // (ex.DomControl.Success처럼 사용하면 가독성이더 좋음)
}
{
  // const enum
  // enum
  // enum -> 번들 크기가 크지만, 디버깅이 용이함
  // const enum -> 번들 크기가 작지만, 디버깅이 불편함
  // 번들: 여러 파일들을 하나의 파일로 합쳐서 묶은 것, 컴파일 이후 발생
  const enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  // console.log(Status.Loading);
}
{
  //enum 숫자값이 할당됨
  //숫자 열거형 enum
  enum Direction {
    Up, //0
    Down = 500, //500
    Left = 2, //501
    Right = 3, //502
  }

  console.log(Direction.Up);
}

{
  //숫자 열거형
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  console.log(StatusCode.OK);
  console.log(StatusCode[200]); //리버스 매핑; 값으로 열거형의 key를 가져올 수 있음
  // const enum으로 하면 compile하고난 후 enum의 흔적이 남지 않아서
  // 리버스 매핑 불가
}
{
  //문자 열거형
  //혼합 열거형->많이 사용하지는 않음
  enum Status {
    Loading = "loading",
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
