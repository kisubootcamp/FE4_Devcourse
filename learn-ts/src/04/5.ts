{
  // 1. 선언하는 문법의 차이
  // 1.1 type Type = ...
  // 1.2 interface Type {...}

  // 2. 인터페이스는 선언 병합, extends 상속
  // 3. 인터페이스는 객체 타입만 정의, 타입 별칭은 모든 타입을 정의
  // 4. 타입 별칭과 인터페이스는 서로가 서로의 재료가 될 수있다.

  interface ProductItem {
    id: number;
    name: string;
    price: number;
  }
  type Product = {
    name: string;
    items: ProductItem[];
  };

  const product1: Product = {
    name: 'TV',
    items: [
      {
        id: 1,
        name: 'LG OLED',
        price: 1000,
      },
    ],
  };
}
{
  // enum: 열거형, 관련된 타입을 묶어 놓는 것
  enum Status {
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
  }
  function showStatus(status: Status) {
    switch (status) {
      case Status.Loading:
        console.log('로딩 중');
        break;
      case Status.Success:
        console.log('성공');
        break;
      case Status.Error:
        console.log('실패');
        break;
    }
  }
  showStatus(Status.Success);
}
{
  // enum -> 번들 크기가 크지만, 디버깅 용이
  // const enum -> 번들크기 작지만, 디버깅 불편
  const enum Status {
    Loading = 'loading',
    Success = 'success',
    Error = 'error',
  }

  console.log(Status.Loading);
}
{
  // enum 숫자값이 할당됨
  // 숫자 열거형 enum
  enum Direction {
    Up, //0
    Down = 500, //500
    Left, // 501
    Right, //502
  }

  console.log(Direction.Up);
}
{
  // 숫자 열거형
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    NotFound = 404,
  }

  console.log(StatusCode.OK);
  console.log(StatusCode[200]); // 리버스 매핑 const enum애선 사용 불가
}
{
  // 문자 열거형
  // 혼합 열거형
  enum Status {
    Loading = 'loading',
    Error = 0,
    Success = 'success',
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
