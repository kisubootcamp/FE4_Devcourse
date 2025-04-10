{
  // 타입 별칭 : type
  // 인터페이스 : interface
  // 1. 선언하는 문법의 차이
  // type Type = ~
  // interface Type { ~~ }

  // 2. 인터페이스는 선언 병합, extends 상속
  // 3. 인터페이스는 객체 타입만 정의할 수 있고, 타입 별칭은 모든 타입을 정의할 수 있다.
  // 4. 타입 별칭과 인터페이스는 서로가 서로의 재료가 될 수 있다
  // ex)
  type Status = "error" | "success";
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
    name: "tv",
    items: [
      {
        id: 1,
        name: "Lg OLEd",
        price: 1000,
      },
    ],
  };
}
