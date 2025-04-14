{
  // 이넘(enum) - 열거형 (관련된 타입을 묶어 놓는 것)
  // -> 유니온 타입으로 비슷하게 사용할 수 있지만,
  // -> 식별자를 붙여줌으로써 의미를 명확하게 전달할 수 있고, 가독성이 좋음
  type Status = string;

  function showStatus(status: Status) {
    if (status == "loading") {
      console.log("로딩 중...");
    } else if (status == "success") {
      console.log("성공");
    } else if (status == "error") {
      console.log("실패!");
    }
  }
  showStatus("loading");
  showStatus("successsss"); // 오타인데 실행이 됨 (물론 값은 출력되지 않음) -> 엄밀히 말하면 버그임 (successsss라는 값이 없기 때문에 실행되면 안 됨)

  // 이넘의 키 값을 작성할 때는 늘 파스칼 케이스로 작성하자는 암묵적인 관례가 있음. (Loading, Success, Error)
  enum StatusEnum {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  // enum과 const enum의 차이
  // enum
  // -> enum은 컴파일 과정에서 복잡하게 남아있음
  // -> 번들 크기가 크지만, 디버깅이 용이함
  // const enum
  // -> const enum은 컴파일 과정에서 enum이란 게 남아있지 않음 (코드로 치환하고 enum을 없앰)
  // -> 번들 크기가 작지만, 디버깅이 불편함 (아예 흔적도 안 남아서)
  const enum StatusEnum2 {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  function showStatus2(status: StatusEnum) {
    if (status == "loading") {
      console.log("로딩 중...");
    } else if (status == "success") {
      console.log("성공");
    } else if (status == "error") {
      console.log("실패!");
    }
  }
  showStatus2(StatusEnum.Success);

  function showStatus3(status: StatusEnum) {
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
  }
}

{
  // enum은 숫자값이 할당됨
  // 숫자 열거형 enum -> 아무것도 할당하지 않으면 기본적으로 숫자가 순차적으로 들어감
  // 문자와 숫자 섞어서 사용할 수 있음
  enum Direction {
    Up,
    Down = "Down",
    Left = 2,
    Right = 3,
  }

  console.log("UP");
  // 의미적으로 더 명확하게 나타낼 수 있음 !!
  console.log(Direction.Up); // 0

  // 숫자 열거형 enum의 특징 -> 숫자를 바꾸면 다음부터는 그 바꾼 숫자부터 순차적으로 들어감
  enum Direction2 {
    Up, // 0
    Down = 500, // 500
    Left, // 501
    Right, // 502
  }

  // 숫자 열거형
  // 실무에서 이때 숫자 열거형을 많이 사용함 (이외에는 마땅히 사용하지 않음)
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  console.log(StatusCode.OK); // 200
  // 리버스 매핑 -> const enum에서는 불가능함(컴파일되는 과정에서 코드가 남아있지 않기 때문)
  console.log(StatusCode[200]); // OK

  // 문자 열거형 -> 숫자 열거형보다 많이 사용함
  // 문자 열거형은 반드시 값을 넣어줘야 함.
  enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
  }

  // 혼합 열거형 -> 문법적으로 가능은 하지만, 일반적으로 사용되지 않음
  enum Status2 {
    Loading = "loading",
    Success = "success",
    Error = 0,
  }

  // enum은 타입 별칭이나 인터페이스의 재료로 들어갈 수 있음 !!
  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: "success",
    status: Status.Error,
  };
}
