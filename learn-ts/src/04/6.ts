{
  // 이넘(enum) - 열거형, 관련된 타입을 묶어 놓는 것
  //
  // enum => 번들 크기가 크지만, 디버깅이 용이함
  // 컴파일이 되면 즉시실행 함수의 형태로 변한다
  // const enum => 번들 크기가 작지만, 디버깅이 불편함
  // 컴파일 과정에서 enum 타입 자체는 사라진다.
  type Status = string;
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  //   const enum StatusEnum {
  //     Loading = "loading",
  //     Success = "success",
  //     Error = "error",
  //   }
  function showStatus(status: StatusEnum) {
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
}

{
  // enum 숫자값이 할당
  // 숫자 열거형 enum
  // 값이 비어있으면 자동으로 채워진다.
  enum Direction {
    Up, //0
    Down, //1
    Left = 500, //500
    Right, //501
  }

  console.log("Up");
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
  console.log(StatusCode[400]); // 리버스 매핑
  // const enum 일떄는 리버스 매핑을 사용할 수 없음
  // 참조할 함수가 사라지기 떄문에, 참조할 수 없다
}

{
  // 문자 열거형
  // 혼합 열거형
  // 앞에 값으로 문자가 들어가 있으면, 뒤에 값도 할당을 해주어야한다.
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  enum Status1 {
    Loading = 0,
    Success = "success",
    Error = "error",
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
