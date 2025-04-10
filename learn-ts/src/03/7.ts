{
  type Greet = (name: string) => string;
  const greet: Greet = (name) => `Hello, ${name}`;
}

//NOTE 사용하기에 따라 유지 보수가 좋아짐
// 갑자기 x,y,z,a 좌표로 늘어나게 되면 방대한 데이터에 대해 Point 타입 값만 바꾸면 됨
{
  let point: [number, number] = [10, 20]; // x좌표, y좌표
  let point2: number[] = [10, 20]; // x좌표, y좌표

  type Point = [number, number];
  let point3: Point = [10, 20];
}

{
  type BookItem = {
    readonly id: number; // id 값은 변경할 수 없음
    name: string;
    price: number;
    releaseDate?: Date; //옵셔널
  };
  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };
  let myOrder: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
      {
        id: 2,
        name: "아는 만큼 보이는 프런트 엔드 개발",
        price: 28000,
      },
    ],
  };
}
