// 타입 별칭 -> type
// 인터페이스 -> interface
//1. 선언하는 문법의 차이
//1.2 type Type = ...
//1.3 interface Type {...}

//2. 인터페이스는 선언병합, extends 상속
//3. 인터페이스는 객체타입만 정의, 타입별칭은 모든 타입 정의
//4. 타입별칭과 인터페이스는 서로가 서로의 재료가 될 수 있음

{
  type Status = "Error" | "Success";
  interface ProductItem {
    id: number;
    name: string;
    price: number;
    status?: Status;
  }

  type Product = {
    name: string;
    items: ProductItem[];
  };

  const product1: Product = {
    name: "TV",
    items: [
      {
        id: 1,
        name: "LG OLED",
        price: 1000,
      },
    ],
  };
}
