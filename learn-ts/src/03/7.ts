{
	type Greet = (name: string) => string;
	const greet: Greet = (name) => `Hello, ${name}`;
	console.log(greet("hihihi"));

	let point: [number, number] = [10, 20]; // x좌표, y좌표
	point.push(3); // 가능은 하지만

  type Point = [number, number, number];
  let point3: Point = [10, 20, 30]; // x좌표, y좌표 가독성이 더 좋아짐.
  let point4: Point = [10, 20, 30]; // x좌표, y좌표
  let point5: Point = [10, 20, 30]; // x좌표, y좌표
  let point6: Point = [10, 20, 30]; // x좌표, y좌표
	// 타입 별칭을 쓰면 가독성이 더 좋아지게 때문에 쓴다

	type BookItem = {
    readonly id: number;
    name: string;
    price: number;
    relaseDate?: Date;
  };

  type OrderBook = {
    orderId: string;
    items: BookItem[];
  };

  let aUserOrder: OrderBook = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
      {
        id: 2,
        name: "아는 만큼 보이는 프런트엔드 개발",
        price: 28000,
      },
    ],
  };

  let bUserOrder: {
    readonly orderId: string;
    items?: {
      id: number;
      name: string;
      price: number;
    }[];
  } = {
    orderId: "ord-123",
    items: [
      {
        id: 1,
        name: "코딩 자율학습 HTML+CSS+자바스크립트",
        price: 28000,
      },
    ],
  };

  // 리드온리나 옵셔널도 타입지정에 사용할 수 있다

}
