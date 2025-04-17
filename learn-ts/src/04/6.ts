{
  // 이넘 (enum) - 열거형 타입을 지정할때.
  // 관련된 타입을 묶어놓는 것

  type Status = string;
  enum StatusEnum {
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
  }
  function showStatus(status: Status) {
    switch (status) {
      case StatusEnum.Loading:
        console.log('로딩중');
        break;
      case StatusEnum.Success:
        console.log('성공');
        break;
      case StatusEnum.Error:
        console.log('실패');
        break;
    }
    // if (status === 'loading') {
    //   console.log('로딩 중...');
    // } else if (status === 'success') {
    //   console.log('성공');
    // } else if (status === 'error') {
    //   console.log('실패!');
    // }
    showStatus('StatusEnum.Success');
  }
}

{
  //enum 은 숫자값이 할당된다.
  // 아무것도 할당하지 않으면 숫자가 저절로 들어간다.
  // Up : 0
  // Down : 1
  // Left : 2
  // Right: 3
  // 숫자 열거형 enum
  enum Direction {
    Up, //이렇게 하면 0
    Down = 500, // 501
    Left, // 502
    Right, // 503
  }
  console.log('Up');
  console.log(Direction.Up);
}

{
  // ㅋ
  enum Status {
    Loading = 'loading',
    Error = 0,
    Success = 'seccess',
  }

  interface Api {
    data: string;
    status: Status;
  }

  const api: Api = {
    data: 'success',
    status: Status.Error,
  };
}
