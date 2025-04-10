{
  //타입 별칭 -> type
  //인터페이스 -> interface
  // 1. 선언하는 문법의 차이
  //1.1. 인터페이슨는 선언 병합, extends 상속
  //인터페이스는 객체 타입만 정의 가능, 타입 별칭은 모든 타입을 정의할 수 있다.
  //타입 별칭과 인터페이슨는 서로가 서로의 재료가 될 수 있음

  type Status = "";

  interface ProductItem {
    id: number;
    name: string;
    price: number;
  }

  type Produc = {
    name: string;
    items: ProductItem[];
  };
}
