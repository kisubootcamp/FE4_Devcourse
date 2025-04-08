{
  // 타입 추론
  // 변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  let userLists;

  let num = 10;
  let name = "Hello";
  let bool = true;

  let unde = undefined;
  let nul = null;

  let symbol = Symbol("a");
  let numArr = [1, 2, 3];
  let obj = { name: "sucoding", age: 20 };
  let big = 100n;

  userLists = [
    {
      name: "sucoding",
      age: 20,
    },
  ];

  // 유니온 타입
  // 연습문제 제출하고 뒤늦게 알게 된 개념(아직 정확하게 잘 모름. 내가 이해한 것이 틀릴 수도 있다.)
  // or 연산자(||)랑 비슷하며 이것을 통해 중복을 제거할 수 있다? ex) 수학에서 2a+2b = 2(a+b) 이렇게 묶는 것처럼
  // 결론: 유니온 타입을 사용하면 코드를 간결하게 할 수 있다. 가독성이 올라간다.
  // 연습문제++ 9번(유니온 타입을 사용해 작성한 코드)
  let collection1: ({ id: number; name: string; price: number } | [string, number])[] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];

  // 사용하지 않았을 때 내가 작성한 코드
  let collection2: [
    { id: number; name: string; price: number },
    (string | number)[],
    { id: number; name: string; price: number },
    (string | number)[]
  ] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];

  //이처럼 코드의 가독성 차이가 심해짐. 이거에 대해선 좀 더 공부를 해봐야겠음
}
