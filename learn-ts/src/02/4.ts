{
  // 타입 추론
  // 변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  // 변수명에 마우스를 올려보면 추론된 타입을 볼 수 있음.
  let num = 10;
  let name = "hello";

  let bool = true;
  bool = false;
  // bool = "a"; // bool은 이미 boolean 타입으로 추론된 상태라서 다른 타입의 값을 넣으면 에러가 남.

  // undefined와 null은 any 타입으로 추론됨.
  // undefined와 null로 할당된 값은 추후에 다른 값으로 할당될 수 있다고 타입스크립트가 생각하기 때문.
  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "yubin", age: 26 };
  let big = 100n;

  // 타입 지정하기 전에 변수명에 마우스 올려보면 타입 추론된 게 나오기 때문에
  // 드래그 후 복사하면 쉽게 타입을 지정할 수 있음.
  // BUT, 너무 길면 생략해버리므로 그때는 일부분만 참고할 수 있음.
  let complexData: {
    id: number;
    name: string;
    details: {
      description: string;
      dimensions: {
        height: number;
        width: number;
        depth: number;
      };
      tags: string[];
    };
    reviews: {
      user: string;
      rating: number;
      comment: string;
    }[];
  } = {
    id: 1,
    name: "Product A",
    details: {
      description: "This is a great product",
      dimensions: {
        height: 10,
        width: 5,
        depth: 2,
      },
      tags: ["sale", "new", "featured"],
    },
    reviews: [
      { user: "Alice", rating: 4.5, comment: "Excellent!" },
      { user: "Bob", rating: 3.0, comment: "Decent product." },
    ],
  };

  // 타입 추론이 됨에도 불구하고 타입 지정을 해줘야 하는 이유 ?

  // 선언만 하고 아직 할당되지 않은 경우엔 any 타입으로 추론이 됨.
  // 선언만 한 상태에서 볼 때는 개발자 입장에서 어떤 타입이 담길지 예측이 안 됨.
  // 타입 지정을 하면 변수가 선언된 것만 봐도 타입을 직관적으로 알 수 있음.

  // 타입스크립트 레벨에서는 명시적으로 타입을 적어주는 게 좋음.(리액트나 뷰, 스벨트 등의 프레임워크를 쓰지 않고 타입스크립트만 쓸 때)
  // 타입 추론으로 문제가 되지 않는다면 리액트 같은 경우에는 타입을 지정하지 않아도 괜찮을 수 있음.
}
