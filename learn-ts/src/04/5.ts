{
  // 타입별칭 -> type
  // 인터페이스 -> interface

  // 문법 선언 차이
  // type Type = ...
  // interface Type (...)

  // 2. 인터페이스 : 선언 병합 가능.
  //   extends 를 통해 상속 가능
  //   객체 타입만 정의할 수 있다.

  //   타입 별칭은 모든 타입을 정의할 수 있다.

  //   타입별칭과 인터페이스는 서로가 서로의 재료가 될 수 있다.
  type Status = 'Error' | 'Success';
  interface ProductItem {
    id: number;
    name: string;
    price: number;
    status: Status;
  }

  type Product = {
    name: string;
    items: ProductItem[];
  };

  const product1: Product = {
    name: 'tv',
    items: [
      {
        id: 1,
        name: 'LG OLED',
        price: 1000,
      },
    ],
  };
}
