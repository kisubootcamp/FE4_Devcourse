{
  // 이넘(enum) - 열거형
  type Status = string;

  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  //  const enum Status {
  //     Loading = "loading",
  //     Success = "success",
  //     Error = "error",
  //   }

  function showStatus(status: StatusEnum) {
    if (status === "loading") {
      console.log("로딩중...");
    } else if (status === "success") {
      console.log("성공");
    } else if (status === "error") {
      console.log("실패");
    }
  }
  showStatus(StatusEnum.Loading);
}
{
  // enum 숫자값이 할당됨
  // 숫자 열거형  enum
  enum Direction {
    Up,
    Down = "Down",
    Left = 500,
    Right,
  }

  console.log("Up");
  console.log(Direction.Up);
  console.log(Direction.Down);
  console.log(Direction.Left); // 500
  console.log(Direction.Right); // 501 -> 아무값도 할당하지 않으면 자동으로 다음숫자가 출력됨.
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
  console.log(StatusCode[200]); //리버트 매핑
}
{
  // 문자 열거형
  // 중간에 숫자가 있다면 혼합열거형
  enum Status {
    Loading = "loading",
    Error = "error",
    Error0 = 0,
    Success = "success",
  }
}
{
  // 문자 열거형
  // 혼합 열거형
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
{
}
