{
  // enum
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  type Status = string;
  function showStatus(status: StatusEnum) {
    switch (status) {
      case StatusEnum.Loading:
        console.log("로딩 중...");
        break;
      case StatusEnum.Success:
        console.log("성공");
        break;
      case StatusEnum.Error:
        console.log("실패!");
        break;
    }
    // if (status === "loading") console.log("로딩 중...");
    // else if (status === "success") console.log("성공");
    // else if (status === "error") console.log("실패!");
  }
  showStatus(StatusEnum.Success);

  type StatusType = "loading" | "success" | "error";
  function showStatusType(status: StatusType) {}
  showStatusType("success");
}
{
  const enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  console.log(Status.Loading);
}
{
  // 숫자 열거형
  enum Direction {
    Up,
    Down = 500,
    Left,
    Right,
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
  console.log(StatusCode[200]); // 리버스 매핑
}
{
  // 문자 열거형
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }
  console.log(Status.Loading);
}
{
  // 혼합 열거형
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = 0,
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
