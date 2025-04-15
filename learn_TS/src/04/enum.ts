{
  // enum(이넘) - 열거형
  // 관련된 타입을 묶어 놓는것
  // 오타를 방지할 수 있음

  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  function showStatus(status: StatusEnum) {
    if (status === "loading") {
      return console.log("로딩중...");
    } else if (status === "success") {
      return console.log("성공");
    } else if (status === "error") {
      return console.log("실패!!!");
    }
  }
  showStatus(StatusEnum.Success);
}

{
  // enum은 기본 적으로 숫자값이 할당 됨
  // 숫자열거형 enum
  enum Direction {
    Up = 200,
    Down = 188,
    Left,
    Right,
  }

  // 리버스 매핑
  // 그냥 enum 에서는 가능한데 const enum에서는 불가능하다
  console.log(Direction[200]);
  console.log(Direction.Right);

  // 숫자열거형 enum
  enum Word {
    Up = "up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
  }
  console.log(Word.Down);
}
{
  // const enum
  // enum
  // enum -> 번들 크기가 크지만, 디버깅이 용이함
  // const enum -> 번들 크기가 작지만, 디버깅이 불편함
  const enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  // console.log(Status.Loading);
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
