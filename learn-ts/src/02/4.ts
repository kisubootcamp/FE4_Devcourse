{
  let userLists;
  // 타입 추론
  // 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
  let num: number = 10;
  let name: string = 'Hello';
  let bool = true;
  let unde = undefined;
  let symbol = Symbol('A');
  let numArr = [1, 2, 3];
  let obj = { name: 'sucoding', age: 20 };
  let big = 100n;

  userLists = [
    {
      name: 'sucoding',
      age: 20,
    },
  ];
}
