{
  // 타입별칭
  // 인터페이스

  // 선언하는 문법 차이
  // type Type
  // interface Intersection

  // 인터페이스는 선언 병합, extends 상속 가능
  // 인터페이스는 객체 타입만 정의할 수 있고
  // 타입별칭은 모든 차입을 정의할 수 있다.
  // 타입별칭과 인터페이스는 서로가 서로의 재료가 될 수 있음

  type Status = "Error" | "Success";
  interface ProductItem {
    id: number;
    name: string;
    price: number;
    status?: Status;
  }

  type Product = {
    name: string;
    item: ProductItem[];
  };

  const product1: Product = {
    name: "tv",
    item: [
      {
        id: 12,
        name: "LG",
        price: 1000,
      },
    ],
  };
}
